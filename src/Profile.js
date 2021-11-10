import React from "react"

function Profile() {
    return (
        <form>
            <h3>Profile page</h3>

            <div class="form-group">
                <label for="exampleFormControlFile1  ">Upload</label>
                <input type="file" class="form-control-file " id="exampleFormControlFile1" />
            </div>
            <div class="row">
                <label for="Text1">Enter your name</label>
                <div class="col">
                    <input type="text" class="form-control  " placeholder="First name" />
                </div>
                <div class="col">
                    <input type="text" class="form-control  " placeholder="Last name" />
                </div>
            </div>
            <form action="/action_page.php">
                <label for="dob">Enter DOB</label>
                <input type="date" id="dob" name="dob" />
                <input type="submit" />
            </form>

            
            
            <form class="form-inline">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref ">Enter your religion</label>
                <select class="custom-select my-1 mr-sm-2  " id="inlineFormCustomSelectPref">
                    <option selected>Choose...</option>
                    <option value="1">Hinduism</option>
                    <option value="2">Christianity</option>
                    <option value="3">Islam</option>
                    <option value="3">Other</option>
                </select>
            </form>

            <div class="row">
                <label for="Text1">Enter your height</label>
                <div class="col">
                    <input type="text" class="form-control  " placeholder="Enter feet" />
                </div>
                <div class="col">
                    <input type="text" class="form-control " placeholder="Last inches" />
                </div>
            </div>
                <p className="forgot-password text-right">
                <a class="nav-link" href="/">Logout</a>
            </p>
        </form>
    );
}

export default Profile;