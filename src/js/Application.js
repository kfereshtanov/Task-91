import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
	static get events() {
		return {
			READY: "ready",
		};
	}

	constructor() {
		super();

		const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
		let count = 0;

		this._beat = new Beat();

		this._beat.on(Beat.events.BIT, () => {
				if (count < lyrics.length) {
					this._create();
					count++;
				}

				return;
		})

		this._create = () => {
			const message = document.createElement("div");
			message.classList.add("message");
			message.innerText = `${lyrics[count]}`;
			document.querySelector(".main").appendChild(message);
		}

		this.emit(Application.events.READY);
	}
}
