const heading=React.createElement("h1", {className:"heading"}, "Navbar");
const hrLine=React.createElement("hr", null, null)
const box=React.createElement("div", {className:"box"}, "This is a box.")

const container=React.createElement("div", {
    id:"container"
},
[heading, hrLine, box]
)

const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(container)