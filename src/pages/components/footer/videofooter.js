import React from "react";
import "./videoFooter.css";


function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="VideoFooter__Text">
        <h3>@{name}C</h3>
          <p>{description}
            </p>
        <div className="videoFooter__music">
         
          <div className="videoFooterMusic__text">
          <p>{music}</p>
          </div>
         
        </div>
      </div>
      <img 
      className="videoFooter__record"
      alt="Imagem de um vinil girando"
      src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
      />
    </div>
  );
}

export default VideoFooter;