import React from "react";
// Creating a new type called 'ClockState' that houses a single property of 'time', which has an assigned datatype of Date.  Our Type Alias of ClockState now houses the state of our application
type ClockState = {
    time: Date
};

//Type Alias titled 'AcceptedProps', that holds the properties we're passing from App.tsx with their specified data types. 
type AccceptProps = {
    testProp: string, //Since testProp is not an optional, it implicitly has to be passed into the Clock component.
    optionalProp?: string    //'?' behind our optionalProp denotes that this prop is optional, meaning that our Clock.tsx component can optionally be passed a prop of 'optionalProp'. 
    // if the type of optionalProp? is changed to number, an error dipslays indicating "type string is not assignable to type number"
    //  if we neglect to pass 'optionalProp' into the call of our Clock component in App.tsx, notice we don't run into any issues since optionalProp can optionally be passed/not passed to the Clock component.
    // If we take off the question mark that is tacked onto optionalProp in our Type Alias of AcceptedProps, notice that we immediately receive an error. That's because we are now explicitly requiring that the Clock component receives a prop of optionalProp, and optionally requiring it. 
};


// <{}, ClockState > Passes type into the Clock component so it has access to it.
// Inside the carrots is where we pass in props to our component, as well as where we pass in the state. If we're not passing in any props, and we're not passing in any state, the default values passed into the component are empty objects, which would look like this:class Clock extends React.Component<{}, {}>
// NOTE: props are always passed to the component first, followed by state.  class Clock extends React.Component<props, state>

class Clock extends React.Component<AccceptProps, ClockState> {
    // Since we want to enforce type checking on our props, we need to make sure the props being passed into the constructor function have a type of 'AcceptedProps'. We can do that by giving our 'props' object a type of 'AcceptedProps'!
    constructor(props: AccceptProps) {
        super(props);
        // this.state({
        // time: new Date();
        // }
    }

    //   Updating State:  Here we are calling the setState() method, and updating our count property to hold the value of the current date.
    tick() {
        this.setState({
            time: new Date(),
        })
    };
    // The componentWillMount() lifecycle method is initializing our state before the component mounts
    componentWillMount() {
        this.tick();
    }

    // The componentDidMount() lifecycle method is calling a setInterval() method that will update our state every second.
    componentDidMount() {
        setInterval(() => this.tick(), 1000);
    }

    render() {
        return (
            <div>
                {/* Here we are simply grabbing our state property of time, and calling the toLocalTimeString() method on it. The toLocalTimeString() method returns a string representing the time portion of the given Date. */}
                <h1>{this.state.time.toLocaleTimeString()}</h1>
                {/* display the props that are now being passed into the Clock component. */}
                <p>{this.props.testProp}</p>
                <p>{this.props.optionalProp}</p>

            </div>
        );
    }
}

export default Clock;
