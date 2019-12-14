import React from 'react';

// Set URL for database
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  console.log('this is for heroku');
}


class Listings extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      listings: []
    }
  }


  fetchListings = () => {
    console.log(baseUrl);
    fetch(`${baseUrl}/listings`)
    .then(data=>data.json())
    .then(jData=> {
      this.setState({listings:jData})
    }).catch(err=>console.log(err))
  }


  handleDelete = (id) => {
    fetch(`${baseUrl}/listings/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
        this.setState({
          listings: this.state.listings.filter(listing => listing.id !== id)
        })
      }).catch(err => console.log(err))
  }


  // Run fetchListings only once after page loads
  componentDidMount(){
    this.fetchListings()
  }


  render(){
    return(
      <div className='column-listings'>
        <h3>Listing ({this.state.listings.length})</h3>
        <div className='box'>
          {this.state.listings.map(listing => {
            return(
              <div key={listing.id} className='job'>
                <h4>Date created: {listing.listingDate}</h4>
                <h4>Company: {listing.company}</h4>
                <a href={listing.positionURL}>Position: {listing.position}</a>
                <h4>Notes:</h4>
                <p>{listing.notes}</p>
                <button>Edit</button>
                <button onClick={()=>{this.handleDelete(listing.id)}}>Delete</button>
                <button>Applied</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Listings;
