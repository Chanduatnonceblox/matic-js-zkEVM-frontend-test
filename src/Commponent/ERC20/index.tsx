function ERC20(){

    return(
        <div>
            <h1>ERC20 Token</h1>

            <div className="form-container">
    <form>
      <label htmlFor="source">Source:</label>
      <select id="source" name="source">
        <option value="location1">Location 1</option>
        <option value="location2">Location 2</option>
        <option value="location3">Location 3</option>

      </select>

      <label htmlFor="destination">Destination:</label>
      <select id="destination" name="destination">
        <option value="destination1">Destination 1</option>
        <option value="destination2">Destination 2</option>
        <option value="destination3">Destination 3</option>
     
      </select>

      <label htmlFor="additionalInfo">Additional Information:</label>
      <input type="text" id="additionalInfo" name="additionalInfo" placeholder="Enter additional information"/>

      <button type="submit">Submit</button>
    </form>
  </div>
        </div>
    )
}

export default ERC20