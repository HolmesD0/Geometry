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
