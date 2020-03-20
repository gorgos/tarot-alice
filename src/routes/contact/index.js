import { h } from 'preact';
import style from './style';

const photographs = (props) => (
	<div class={style.pageContact}>
		<h1 class={style.pageTitle}>Contact me</h1>
		<div class={style.formWrapper}>
			<p class={style.pageBody}>
				<div>Hello my dear friend!</div>
				<br />
				<div>If you are interested in my work and are looking to contact me for a job or to give feedback, please use the following form to contact me.</div>
				<div>&nbsp;</div>
				<div>Best of luck,</div>
				<div><b>Alice</b></div>
			</p>
			<form name="contact" method="POST" data-netlify="true" action="/contact/success" data-netlify-honeypot="bot-field">
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<input type="text" name="name" placeholder="Name" required />
				</p>
				<p>
					<input type="email" name="email" placeholder="E-Mail" required />
				</p>
				<p>
					<textarea name="message" placeholder="Message" />
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</div>
	</div>
);

export default photographs;
