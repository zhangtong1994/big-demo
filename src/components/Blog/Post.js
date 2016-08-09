import React, { Component } from 'react';
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
 class Post extends Component {
   constructor(){
     super();
     this.state={
       rawContent: ''
     }
   }
   componentDidMount(){
   let address = `https://raw.githubusercontent.com/zhangtong1994/big-demo/master/posts/${this.props.params.title}.md`
   axios.get(address).then((res) => {
      //  console.log(res);
      //  console.log(address);
       this.setState({
         rawContent: res.data
       });
     });
   }
   render(){
     marked.setOptions({
       highlight: function (code) {
         return hljs.highlightAuto(code).value;
       }
     });
     let content = marked(this.state.rawContent!='' ? this.state.rawContent : '请稍等......' );
     return(
       <div>
         { this.props.params.title }
         <div className="post-content">
           <span dangerouslySetInnerHTML={{__html: content}} />
         </div>
       </div>
     )
   }
 }

 export default Post;
