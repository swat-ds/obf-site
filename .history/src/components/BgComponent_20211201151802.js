import React from 'react'
import Layout from '../components/Layout'

const BgComponent = ({pageContext}) => {
    return (
      <div
        style={{ border: "10px solid black" }}
        dangerouslySetInnerHTML={{ __html: pageContext.body }}
      >
      </div>
    );
}

export default BgComponent
