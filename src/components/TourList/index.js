import React, { Component } from 'react';
import "./Tourlist.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../../services/tourData";



export default class TourList extends Component {
    state = {
        tours: tourData
    };

    removeTour = id => {
        const {tours} = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        });
    }

    render() {
        const { tours } = this.state;
        return (
          <div className="tourList">
              {tours.map(tour => {
                  return (
                      <Tour key={tour.id} tour={tour} removeTour={this.removeTour}/>
               )
              })}
          </div>
        );
    }
}
