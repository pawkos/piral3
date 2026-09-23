//@pilet v:2(rolluppr_samplepilet,{})
System.register(["react", "react-router-dom"], function(e, t) {
	var n, r, i;
	function a() {
		let [e, t] = n.useState(0);
		return /* @__PURE__ */ n.createElement("div", {
			className: "teaser pilet-teaser",
			style: {
				background: "#eef2ff",
				borderColor: "#c7d2fe",
				width: "100%",
				height: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
				padding: "1rem",
				borderRadius: "8px"
			}
		}, /* @__PURE__ */ n.createElement("div", null, /* @__PURE__ */ n.createElement("div", { style: {
			display: "flex",
			alignItems: "center",
			justifyContent: "space-between",
			marginBottom: "0.25rem"
		} }, /* @__PURE__ */ n.createElement("strong", { style: { color: "#4338ca" } }, "Sample Pilet"), /* @__PURE__ */ n.createElement("span", { style: {
			fontSize: "0.75rem",
			background: "#6366f1",
			color: "#fff",
			padding: "2px 6px",
			borderRadius: "4px"
		} }, "v1.0")), /* @__PURE__ */ n.createElement("div", { style: {
			fontSize: "0.85rem",
			color: "#475569"
		} }, "Loaded dynamically from ", /* @__PURE__ */ n.createElement("code", null, "/feed.json"), " with React 19 & Vite 8.")), /* @__PURE__ */ n.createElement("div", { style: {
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			marginTop: "0.5rem"
		} }, /* @__PURE__ */ n.createElement("button", {
			type: "button",
			onClick: (e) => {
				e.stopPropagation(), t((e) => e + 1);
			},
			style: {
				cursor: "pointer",
				border: "none",
				background: "#fff",
				color: "#4338ca",
				padding: "4px 8px",
				borderRadius: "4px",
				fontSize: "0.8rem",
				fontWeight: 600,
				boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
			}
		}, "👍 Likes (", e, ")"), /* @__PURE__ */ n.createElement(r, {
			to: "/sample",
			style: {
				fontSize: "0.8rem",
				fontWeight: 600,
				color: "#4f46e5",
				textDecoration: "none"
			}
		}, "Open Page →")));
	}
	function o(e) {
		e.registerPage("/sample", i), e.showNotification("Sample Pilet successfully mounted from feed.json!", {
			autoClose: 4e3,
			type: "success"
		}), e.registerMenu(() => /* @__PURE__ */ n.createElement(r, {
			className: "nav-link font-weight-bold text-primary",
			to: "/sample"
		}, "Sample Pilet")), e.registerTile(a, {
			initialColumns: 4,
			initialRows: 2
		});
	}
	return e("setup", o), {
		setters: [function(e) {
			n = e;
		}, function(e) {
			r = e.Link;
		}],
		execute: function() {
			//#region src/index.tsx
			i = n.lazy(() => t.import("./Page.CDnCIio1.js"));
		}
	};
});

//# sourceMappingURL=index.js.map