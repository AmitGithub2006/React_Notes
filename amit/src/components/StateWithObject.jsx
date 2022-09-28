import React, {useState} from 'react';

export function StateWithObject () {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })

    return (
      <>
        <form>
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              id="fname"
              onChange={(e) => {
                // setName({firstName: e.target.value });

            //       A setState will not prevent other setState's value i.e if we change firstName value then the value of lastName will get vanished so thats why we are using spread operator for spreading the value so that it does not gets vanished.

            // Whenever we are using the object, we need to spread the object before setting the value or doing the updation.

                setName({...name, firstName: e.target.value });
              }}
              value={name.firstName}
            />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              id="lname"
              onChange={(e) => {
                // setName({lastName: e.target.value });
                setName({...name, lastName: e.target.value });
              }}
              value={name.lastName}
            />
          </div>
          <p>My first name is {name.firstName} and last name is {name.lastName}</p>
        </form>
      </>
    );
}