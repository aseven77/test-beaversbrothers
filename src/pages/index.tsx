import React, { Component } from "react"

import { Layout } from "~/components/Layout/Layout"
import { ContainerList } from "~/components/ContainerList/ContainerList"
import Place from "~/components/Place/Place"
import Soon from "~/components/Soon/Soon"
import objects from "~/json/objects"
import soon from "~/json/soon"
export default class extends Component {

  render() {
    let placestop = null;
    let places = null;
    let soons = null;
    placestop = objects.map((item,index) => {
      if(item.position) {
        return (
          <Place key={index} img={item.img} title={item.title} desc={item.desc} id={index + 1}  place={`places_top_${item.position}`}/>
        )
      }
    })
    places = objects.map((item,index) => {
      if(!item.position) {
        if(item.mod) {
          return (
            <Place key={index} img={item.img} title={item.title} desc={item.desc}  id={index + 1} place={item.mod} />
          )
        } else {
          return (
            <Place key={index} img={item.img} title={item.title} desc={item.desc}  id={index + 1} />
          )
        }
      }
    })
    soons = soon.map((item,index) => {
      return (
        <Soon key={index} img={item.img} title={item.title} desc={item.desc}  active={item.active}/>
      )
        
    })

    return (
      <Layout>
          <div className="title">ТОП <span>10</span> мест</div>
          <div className="placestop">
            {placestop}
          </div>
          <ContainerList>
            {places}
          </ContainerList>
          <div className="title"><span>Скоро</span> на сайте</div>
          <ContainerList>
            {soons}
          </ContainerList>          
      </Layout>
    )

  }
}
