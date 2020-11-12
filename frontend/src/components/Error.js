// This is a general 404 error component

const Error = () => {
  return (
    <div id="errorContainer">
      <h1>404 - Not Found</h1>
      <p id="errorText1">Whoops! Looks like the requested content does not exist or there was an error trying to access it.</p>
      <p id="errorText2">Try refreshing this page or checking the address!</p>
    </div>
  )
}

export default Error;