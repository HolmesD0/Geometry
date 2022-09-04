import { createRoot } from 'react-dom/client'
import { useState } from 'react'
import Header from './Header'
import App from './App'
import './index.css'

function All() {
	const [shapes, setShapes] = useState(["Cone", "Octahedron", "Box"])
	const handleShape = (Shapes) => {
		setShapes(Shapes)
	}
    return (
        <>
			<Header handleShapes={handleShape} />
			<h3>Left Click On The Model For Rotating</h3>
			<h3>Right Click On The Model To Following Cursor</h3>
			{shapes.map((Shape, i) => {
				return (
					<div key={i} className="App"><App shape={Shape} /></div>
				)
			})}
		</>
    )
}

createRoot(document.getElementById('root')).render(
  <All />,
)
