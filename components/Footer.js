import Style from "/styles/Footer.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function () {
  return (
    <footer className={Style.footer}>
			<div className={Style.container}>
				<div className={Style.footer__content}>
					<h2 className={Style.footer__title}>Ventas de lotes</h2>
					<ul className={Style.footer__list}>
						<li>
							<Link className={Style.footer__link} href="/">
								Lotes
							</Link>
						</li>
						<li>
							<Link className={Style.footer__link} href="/contactanos">
								Contactos
							</Link>
						</li>
					</ul>
					<p className={Style.footer__text}>
						Nuestras oficinas estan ubicadas en Santa Lucia Transversal xx Mz **
						- ** segundo piso.
					</p>
					<div className={Style.footer__socials}>
						<ion-icon name="logo-facebook"></ion-icon>
						<ion-icon name="logo-instagram"></ion-icon>
					</div>
				</div>
			</div>
		</footer>
  )
}