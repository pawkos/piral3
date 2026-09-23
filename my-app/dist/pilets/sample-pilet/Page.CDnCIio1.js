System.register(["react"], function(e, t) {
	var n;
	//#region src/Page.tsx
	function r() {
		let [e, t] = n.useState(0), [r, i] = n.useState("");
		return /* @__PURE__ */ n.createElement("div", {
			className: "pilet-page-container",
			style: { padding: "2rem 0" }
		}, /* @__PURE__ */ n.createElement("div", {
			className: "card shadow-sm border-0 mb-4",
			style: {
				borderRadius: "12px",
				overflow: "hidden"
			}
		}, /* @__PURE__ */ n.createElement("div", { className: "card-header bg-primary text-white py-3" }, /* @__PURE__ */ n.createElement("h2", { className: "h4 mb-0" }, "🧩 Sample Pilet Microfrontend"), /* @__PURE__ */ n.createElement("small", { className: "opacity-75" }, "Loaded dynamically via feed.json • React 19 • Vite 8")), /* @__PURE__ */ n.createElement("div", { className: "card-body p-4" }, /* @__PURE__ */ n.createElement("p", { className: "lead" }, "This page is rendered by an independently developed and bundled ", /* @__PURE__ */ n.createElement("strong", null, "Pilet"), ". The Piral App Shell discovered and loaded this microfrontend at runtime from ", /* @__PURE__ */ n.createElement("code", null, "/feed.json"), "!"), /* @__PURE__ */ n.createElement("div", { className: "row g-4 my-3" }, /* @__PURE__ */ n.createElement("div", { className: "col-md-6" }, /* @__PURE__ */ n.createElement("div", { className: "p-3 border rounded bg-light" }, /* @__PURE__ */ n.createElement("h5", { className: "text-secondary" }, "⚡ Microfrontend State (React 19)"), /* @__PURE__ */ n.createElement("p", null, "Interactive state inside the isolated pilet:"), /* @__PURE__ */ n.createElement("div", { className: "d-flex align-items-center gap-3" }, /* @__PURE__ */ n.createElement("button", {
			className: "btn btn-outline-primary btn-sm",
			onClick: () => t((e) => e - 1)
		}, "- Decrement"), /* @__PURE__ */ n.createElement("span", { className: "badge bg-primary fs-6 px-3 py-2" }, "Count: ", e), /* @__PURE__ */ n.createElement("button", {
			className: "btn btn-primary btn-sm",
			onClick: () => t((e) => e + 1)
		}, "+ Increment")))), /* @__PURE__ */ n.createElement("div", { className: "col-md-6" }, /* @__PURE__ */ n.createElement("div", { className: "p-3 border rounded bg-light" }, /* @__PURE__ */ n.createElement("h5", { className: "text-secondary" }, "📡 Pilet Metadata"), /* @__PURE__ */ n.createElement("ul", { className: "list-unstyled mb-0 small" }, /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("strong", null, "Name:"), " sample-pilet"), /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("strong", null, "Version:"), " 1.0.0"), /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("strong", null, "Format:"), " Schema v2 (SystemJS)"), /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("strong", null, "Bundler:"), " Vite 8 (piral-cli-vite8)"), /* @__PURE__ */ n.createElement("li", null, /* @__PURE__ */ n.createElement("strong", null, "Framework:"), " React 19 (react 19.3.0)"))))), /* @__PURE__ */ n.createElement("div", { className: "mt-4" }, /* @__PURE__ */ n.createElement("h5", null, "Interactive Feedback"), /* @__PURE__ */ n.createElement("div", {
			className: "input-group mb-3",
			style: { maxWidth: "500px" }
		}, /* @__PURE__ */ n.createElement("input", {
			type: "text",
			className: "form-control",
			placeholder: "Type a test message...",
			value: r,
			onChange: (e) => i(e.target.value)
		}), /* @__PURE__ */ n.createElement("button", {
			className: "btn btn-success",
			type: "button",
			onClick: () => alert(`Pilet Echo: "${r || "Hello Microfrontends!"}"`)
		}, "Test Pilet Action"))))));
	}
	return e("default", r), {
		setters: [function(e) {
			n = e;
		}],
		execute: function() {}
	};
});

//# sourceMappingURL=Page.CDnCIio1.js.map