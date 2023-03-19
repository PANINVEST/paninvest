import React from "react";

const Signup = () => {
  return (
    <div>
      <div>
        <h1>Sign up as a Startup</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, minus!
        </p>
      </div>
      <label htmlFor="fname"></label>
      <br />
      <input
        type="text"
        id="fname"
        name="fname"
        placeholder="Company Name"
        className={"border-2"}
      />
      <br />
      <label htmlFor="CompanyEmail"></label>
      <br />
      <input
        type="email"
        id="CompanyEmail"
        name="CompanyEmail"
        placeholder="Company Email"
        className={"border-2"}
      />
      <br />
      <label htmlFor="CompanyPhone"></label>
      <br />
      <input
        type="text"
        id="CompanyPhone"
        name="CompanyPhone"
        placeholder="Company Phone"
        className={"border-2"}
      />
      <br />
      <label htmlFor="Description"></label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        className={"border-2"}
        placeholder={"Company Description"}
      ></textarea>
      <br />
      <label htmlFor="CompanyWebsite"></label>
      <br />
      <input
        type="text"
        id="CompanyWebsite"
        name="CompanyWebsite"
        placeholder="Company Website"
        className={"border-2"}
      />
      <br />
      <label htmlFor="CompanyAddress"></label>
      <br />
      <input
        type="text"
        id="CompanyAddress"
        name="CompanyAddress"
        placeholder="Company Address"
        className={"border-2"}
      />

      <br />
      <label htmlFor="Industry"></label>
      <br />
      <input
        name=""
        id=""
        className={"border-2"}
        placeholder={"Industry/Sector"}
      />
      <br />
      <label htmlFor="CompanyLogo">Upload Logo</label>
      <br />
      <input
        type="file"
        id="CompanyLogo"
        name="CompanyLogo"
        placeholder="Company Logo"
        className={"border-2"}
      />
      <br />
      <label htmlFor="ProblemStatement"></label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        className={"border-2 resize-y"}
        placeholder={"Problem Statement"}
      ></textarea>
      <br />
      <label htmlFor="Solution"></label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        className={"border-2"}
        placeholder={"Solution"}
      ></textarea>
      <br />
      <label htmlFor="MarketSize"></label>
      <br />
      <input
        type="text"
        id="MarketSize"
        name="MarketSize"
        placeholder="Market Size"
        className={"border-2"}
      />
      <br />
      <label htmlFor="MarketGrowth"></label>
      <br />
      <input
        type="text"
        id="MarketGrowth"
        name="MarketGrowth"
        placeholder="Market Growth"
        className={"border-2"}
      />
      <br />
      <label htmlFor="Stage"></label>
      <br />
      <input
        type="text"
        id="Stage"
        name="Stage"
        placeholder="Stage of Startup"
        className={"border-2"}
      />
      <br />
      <label htmlFor="UploadPitchDeck">Upload Pitch Deck</label>
      <br />
      <input
        type="file"
        id="UploadPitchDeck"
        name="UploadPitchDeck"
        placeholder="Upload Pitch Deck"
        className={"border-2"}
      />
      <br />
      <label htmlFor="sizeofTeam"></label>
      <br />
      <input
        type="text"
        id="sizeofTeam"
        name="sizeofTeam"
        placeholder="Size of Team"
        className={"border-2"}
      />
      <br />
      <label htmlFor="USP"></label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        className={"border-2"}
        placeholder={"Unique Selling Proposition"}
      ></textarea>
      <br />
      <label htmlFor="Revenue Model"></label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        className={"border-2"}
        placeholder={"Revenue Model"}
      ></textarea>
      <br />
      <label htmlFor="Competition"></label>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="2"
        className={"border-2"}
        placeholder={"Competition"}
      ></textarea>
      <br />
      <label htmlFor="TypeOfStartup"></label>
      <br />
      <input
        type="text"
        id="TypeOfStartup"
        name="TypeOfStartup"
        placeholder="Type of Startup"
        className={"border-2"}
      />
      <br />
      <button type={"submit"} className={"p-2 border-2"}>
        Submit
      </button>
    </div>
  );
};

export default Signup;
