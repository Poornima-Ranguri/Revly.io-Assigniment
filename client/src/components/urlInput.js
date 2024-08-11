import React, {useState} from 'react'

function UrlInput() {
  const [url, setUrl] = useState('')

  const handleUrlChange = event => {
    setUrl(event.target.value)
  }

  return (
    <div className="url-input">
      <input
        type="text"
        value={url}
        onChange={handleUrlChange}
        placeholder="Enter website URL"
      />
      <button type="button"> Analyze Performance</button>
    </div>
  )
}

export default UrlInput
