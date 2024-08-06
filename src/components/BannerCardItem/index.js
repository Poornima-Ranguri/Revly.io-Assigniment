import './index.css'

const BannerCardItem = props => {
  const {bannerCardDetails} = props
  const {id, headerText, description, className} = bannerCardDetails
  return (
    <li key={id} className={className}>
      <div className="list-container">
        <div className="text-container">
          <h1>{headerText}</h1>
          <p>{description}</p>
          <button type="button">Show More</button>
        </div>
      </div>
    </li>
  )
}

export default BannerCardItem
