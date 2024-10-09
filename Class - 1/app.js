        const para = React.createElement("p",{id: "paragraph"},"React is a Javascript Library")  // para is an object

        const rootpara = ReactDOM.createRoot(document.getElementById("root"))

        const parent = React.createElement("div" ,{id: "parent"},[

            React.createElement("div" ,{id:"children1"}, 

            [React.createElement("h1",{id:"FirstElement"},"hello"),React.createElement("h2",{id:"SecondElement"},"Second Hello")]
            ),
            React.createElement("div" ,{id:"children2"}, 

            [React.createElement("h1",{id:"FirstElement"},"hello"),React.createElement("h2",{id:"SecondElement"},"Second Hello")]
            )

        ])

        rootpara.render(parent) // convert the para object to h1 tag and put in the root 

        
