import Image from 'next/image'
import Link from 'next/link'
import style from '../styles/Navegation.module.scss'

export default function Navegation() {
	return (
		<>
			<header className={style.header}>
				<div className={style.container}>
					<nav className={style.nav}>
						<Link href="#" className={style.nav__branding}>
							<Image
								src="/logo.jpg"
								width={100}
								height={150}
								className={style.nav__logo}
							/>
						</Link>

						<ul className={style.nav__menu} onClick>
							<li className={style.nav__item}>
								<Link href="#" className={style.nav__link}>
									Inicio
								</Link>
							</li>
							<li className={style.nav__item}>
								<Link href="#" className={style.nav__link}>
									Contacto
								</Link>
							</li>
						</ul>

						<div className={style.social}>
							<ion-icon name="logo-facebook"></ion-icon>
							<ion-icon name="logo-instagram"></ion-icon>
						</div>

						<botton className={style.btn} type="botton">
							<span className={style.btn__bar}></span>
							<span className={style.btn__bar}></span>
							<span className={style.btn__bar}></span>
						</botton>
					</nav>
				</div>
			</header>
		</>
	)
}
