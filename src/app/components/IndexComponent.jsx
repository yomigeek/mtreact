import React from 'react';

class IndexComponent extends React.Component{
    render() {
      const tag = "ANdela,yomi,Kola,Kola";
      const tagToLowerCase = tag.toLowerCase();
      const splitTags = tagToLowerCase.split(",");
      const len = splitTags.length;
      const sorted_arr = splitTags.slice().sort(); 
      const nArr = [];
      const articleId = 1;
      for (const value of splitTags) {
        nArr.push("{" + "title:" + "'" + value + "'" + ',' + 'articleId:' + articleId + '} ,');
      }


        return (
            <div className="nav-bar-margin">
                <p>Welcome,  {this.props.nameProp}</p>
                <p>
                  {len} {nArr} 
                </p>
            </div>
        );
    }
}

export default IndexComponent;