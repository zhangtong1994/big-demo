import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
class Works extends React.Component{
  render(){
    return(
      <div>
       <Card>
           <CardMedia
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
           >
             <img src="../../images/Home.jpg" />
          </CardMedia>
       </Card>
       <Card>
           <CardMedia
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
           >
             <img src="../../images/Home.jpg" />
          </CardMedia>
       </Card>
       <Card>
           <CardMedia
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
           >
             <img src="https://raw.githubusercontent.com/zhangtong1994/big-demo/e1cac8ff7a97351f08c72f8734be737e9cad493a/src/images/Home.jpg" />
          </CardMedia>
       </Card>
       <Card>
           <CardMedia
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
           >
             <img src="../../images/Home.jpg" />
          </CardMedia>
       </Card>
       <Card>
           <CardMedia
             overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
           >
             <img src="../../images/Home.jpg" />
          </CardMedia>
       </Card>
      </div>
    )
  }
}
export default Works;
