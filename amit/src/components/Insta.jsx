import React, { Component } from "react";

export class Insta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          profileImg:
            "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          user: "Building",
          id: 1,
          msg: "Let's build the building",
          imgUrl:
            "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVpbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
          profileImg:
            "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          user: "Mountain",
          id: 2,
          msg: "Mountain is echoing",
          imgUrl:
            "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vdW50YWlufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          profileImg:
            "https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
          user: "Greenary",
          id: 3,
          msg: "Make the world green",
          imgUrl:
            "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          profileImg:
            "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Zmxvd2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
          user: "Flower",
          id: 4,
          msg: "Be like flower!",
          imgUrl:
            "https://images.unsplash.com/photo-1457089328109-e5d9bd499191?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZsb3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
          profileImg:
            "https://images.unsplash.com/photo-1640894822819-0a94bec464bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
          user: "Drawing",
          id: 5,
          msg: "Draw your world as you want.",
          imgUrl:
            "https://images.unsplash.com/photo-1602188324312-e1cd6383d2fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRyYXdpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
      ],
    };
  }
  render() {
    return this.state.data.map((data) => (
      <div className="insta">
        <div className="container">
          <div className="head">
            <img id="profile_img" src={data.profileImg} />
            <h3 id="user">{data.user}</h3>
            <i class="fa-solid fa-ellipsis-vertical dots"></i>
          </div>
          <div className="profile_div">
            <img id="profile_pic" src={data.imgUrl} />
            <div className="icons">
              <div className="left_icons">
                <i className="fa-solid fa-heart like"></i>
                <i className="fa-regular fa-comment comment"></i>
                <i className="fa-solid fa-share share"></i>
              </div>
              <div className="right_icon">
                <i className="fa-regular fa-bookmark save"></i>
              </div>
            </div>
            <div className="quote">
            <h4 id="user">{data.user}</h4>
            <p className="msg">#instagood #lovequotes {data.msg}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}
