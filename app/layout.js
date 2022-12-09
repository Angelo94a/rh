import '../styles/global.css'
import Navegation from "/components/Navegation.js"
import Footer from "/components/Footer.js"
export default function RootLayout({ children }) {
  return (
		<html lang="es">
			<head />
			<body>
				<Navegation />
				{children}
				<Footer />
				
				<script
					defer
					type="module"
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
				></script>
				<script
					defer
					nomodule
					src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
				></script>
			</body>
		</html>
	)
}