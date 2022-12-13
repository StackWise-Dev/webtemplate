import React from 'react'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function footer() {

    let year = new Date().getFullYear();
  return (
    <div className="col-10 mx-auto text-center p-3 text-light position-fixed bottom-0 start-0 end-0 bg-info h5">
      Copyright®️ {year}
    </div>
  )
}
