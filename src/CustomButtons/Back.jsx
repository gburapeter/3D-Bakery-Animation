import * as React from "react";
const Back = (props) => (
	<svg
		width={200}
		height={150}
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 200 150"
		className=" stroke-black hover:stroke-green-700 hover:scale-110 transition-all duration-300 ease-in-out"
		{...props}
	>
		<g fill="none">
			<path d="M61.75 91.125c-.25 0-.491-.029-1.25-.25-.99-.288-2.02-.962-3-1.5-1.278-.702-2.229-1.278-3.25-2-.736-.52-1.546-.923-2-1.25-.574-.413-.75-.75-1.25-1.25l-1-1c-.5-.5-.928-1.053-1.5-1.75-.448-.547-1.25-1.25-1.75-2s-.928-1.553-1.5-2.25c-.448-.547-.673-1.046-1-1.5-.413-.574-.72-1.266-1-1.75-.453-.779-.583-1.558-1-2.5-.365-.824-.623-1.47-.75-2.25-.12-.74 0-1.5 0-2.25s-.21-1.811.25-3c.526-1.36 1.401-2.546 2.25-4.25.898-1.804 3.043-4.667 5.5-7.5 1.39-1.603 2.156-2.603 3.25-3.5a43 43 0 0 1 2.25-1.75c.907-.654 1.967-1.072 3-1.5.731-.302 1.25-.25 1.5-.25l.75-.25 5.25-1.75c2.25-.75 3.974-1.35 5.75-1.75 1.484-.335 3-.5 4.5-.75s2.985-.374 4.5-.5c1.744-.144 3.5-.25 5.25-.25H120c1.5 0 2.996.27 4.25.5 1.496.274 3.25.5 4.75.75s2.701.612 3.75 1c.967.357 1.69.604 2.5 1 .71.347 1.327.584 2 1 .301.186.796.423 1.25.75.287.207.546.423 1 .75a3.3 3.3 0 0 1 .75.75c.327.454.5.75.75 1s.423.546.75 1c.207.287.673.546 1 1 .207.287.5.5 1 1 .25.25.5.5 1 .75s1 .5 1.25.75.5.25.5.25.272-.145.75 0c.863.261 2.75 1.75 3.75 2.25s1.676 1.087 2.25 1.5c.454.327 1 .75 1.5 1.25.25.25.75.5 1 .75s.615.423.75.75c.096.231.115.173.25.5.191.462 0 .75 0 1.25v4.75c0 1-.103 2.254 0 3.5.126 1.516.594 2.722 1 4.25.327 1.232.38 2.26.5 3 .127.78.37 1.26.25 2-.127.78-.528 1.48-1.25 2.5-.52.736-1.303 1.418-2.5 2.25-1.314.914-3.053 1.91-5.25 3.25-3.079 1.877-7 4-11 6s-7.67 3.921-11.25 5.5c-3.186 1.405-5.932 2.461-8.75 3.25-2.455.688-4.723.872-6.75 1.25-1.981.37-3.753.391-5.5.5-2.012.125-4 .25-6.25.25-2 0-4.25-.25-6.25-.75s-3.961-.865-6-1.5c-1.968-.613-3.903-1.474-6-2.25-1.933-.715-3.664-1.456-5.25-2-1.206-.414-2.162-.993-3.25-1.25-.486-.115-.956-.371-1.5-.5-.486-.115-.923-.365-1.25-.5a5 5 0 0 0-.75-.25c-.544-.129-.676-.587-1.25-1-.454-.327-1-.5-1.5-.75s-.706-.371-1.25-.5a4.5 4.5 0 0 1-.75-.25c-.231-.096-.75-.25-1-.25 0 0-.25-.25-.5-.25s-.173-.115-.5-.25c-.231-.096-.5 0-.75 0h-.5c-.25 0-.5 0-.75-.25h-.75" />
			<path d="M58.25 76.875v-5.25c0-1.5.23-3.003.5-4.75.233-1.503.27-2.996.5-4.25.274-1.496.34-2.763.5-3.75.127-.78.622-1.206.75-1.75.058-.243.5-.5.75-.5H63c.75 0 1.98.042 3 .5 1.228.551 2.479 1.028 3.5 1.75.736.52 1.25 1.25 1.5 2s.25 1.25.25 1.5-.513.385-1 .5c-.544.129-1.255.151-2.25.25-1.268.126-2.442.637-3.5 1-1.206.414-1.75.5-2.25.75h1.25c1.25 0 2.804.34 4.5 1 1.563.608 3.057 1.683 4.25 2.75 1.054.943 1.837 1.676 2.25 2.25.327.454.5 1 .5 1.25 0 .5.037.793-.25 1-.454.327-.97.373-1.75.5-.987.16-3.216.619-4.75 1a202 202 0 0 1-4.25 1c-1.006.226-2 .25-2.5.25h-1v.25m20.5 0v-.25c0-.25-.172-.52 0-1.25.129-.544.29-1.311.75-2.5.526-1.36 1.345-2.691 2.25-4.25.842-1.45 1.322-2.467 1.75-3.5.302-.731.404-1.269.5-1.5.135-.327.154-.269.25-.5.135-.327.25-.5.25-.75s.193-.507.25-.75c.129-.544.371-.706.5-1.25.058-.243.115-.423.25-.75.096-.231 0-.25 0-.5v-.25c.25-.25.073-.573.25-.75l.25-.25c0-.25.073-.323.25-.5s0-.25 0-.25c0-.25.25-.25.25-.5v-.25c0 .5-.098 1.04.25 1.75.396.81.962 2.02 1.5 3 .702 1.278 1.5 2.5 2 4s1.143 2.533 1.5 3.5c.388 1.048.797 1.72 1.25 2.5.281.483.365.673.5 1 .191.462.365.673.5 1 .096.231.154.769.25 1 .135.327.365.423.5.75.096.231 0 .5.25.5m-12.5-9.75h6.5m22.25-8.25h-.75c-1.75 0-2.739.052-3.75.25-1.735.34-3.308.873-4.5 1.5-.798.42-1.605.855-2 1.25s-.536 1.234-.75 1.75c-.302.731-.622 1.456-.75 2-.115.487 0 1 0 1.5v3c0 .5.135 1.013.25 1.5.129.544.385 1.013.5 1.5.129.544.355.855.75 1.25s.75.5 1.25.75 1.013.385 1.5.5c.544.129 1 .5 1.5.5.25 0 .75.25 1.25.25s.956.121 1.5.25c.487.115 1 0 1.5 0h2m11.5-19.25v10c0 3.75.177 7.256 0 9.75-.125 1.763-.02 3.277-.25 4.25-.129.544-.25 1-.25 1.25s-.25.25-.25.25v-5.5m1-8.999s.018-.099.244 0c.637.278.903.86 1.462 1.285.442.336 1.085.63 1.706 1.286l1.462 1.542 1.219 1.285c.386.406.487.771.731 1.028l.731.771c.244.257.413.632.731.771.225.099.244.257.487.514l.487.514c.172.182.244 0 .244 0h.246" />
			<path d="M124 67.375s.019.096.25 0c.653-.271 1.48-1.278 3.25-2.5 1.484-1.024 2.643-1.92 3.75-2.5.7-.367 1.206-.872 1.75-1 .243-.058.5-.25.5-.25h.25v-.25" />
		</g>
	</svg>
);
export default Back;
