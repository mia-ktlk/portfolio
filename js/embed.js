! function(a, b) {
    if (!a.AdobeSparkPage) {
        var c = !1;
        b.onreadystatechange = function() {
            if (!c && "complete" === b.readyState || "interactive" == b.readyState) {
                c = !0;
                for (var a = b.querySelectorAll(".asp-embed-link"), d = 0, e = a.length; d < e; d++) {
                    var f = a[d],
                        g = f.parentNode,
                        h = b.createElement("div");
                    h.style.maxWidth = "1300px", h.style.minWidth = "250px", h.style.position = "relative", h.style.paddingBottom = "66.6667%", h.style.height = 0, h.style.overflow = "hidden", h.style.boxShadow = "0px 0px 12px 0px rgba(0,0,0,0.15)";
                    var i = b.createElement("iframe");
                    i.style.width = "100%", i.style.height = "100%", i.style.position = "absolute", i.style.top = 0, i.style.left = 0, i.style.border = "1px solid #ddd", i.style.borderRadius = 0, i.src = f.href + "embed.html", h.appendChild(i), f && g && g.replaceChild(h, f)
                }
            }
        };
        var d = "SparkPage-feature-overlay",
            e = "SparkPage-feature-iframe",
            f = function() {
                return a.navigator.userAgent.search(/mobile/i) >= 0
            },
            g = a.AdobeSparkPage = {
                showFeature: function(c) {
                    var f = b.getElementById(d),
                        h = b.getElementById(e),
                        i = b.getElementById("asp-embed-script");
                    if (!f) {
                        f = b.createElement("div"), f.id = d;
                        var j = 1e6;
                        i && i.dataset.zindex && (j = i.dataset.zindex), f.style.cssText = "z-index:" + j + ";position:fixed;top:0;right:0;bottom:0;left:0;background-color:rgba(26,34,38,0.9);text-align:center;";
                        var k = b.createElement("div");
                        k.innerHTML = '<div data-href="' + c + '" class="expand-link" style="cursor: pointer;position: absolute; top: 10px; right: 51px;width:16px;height:16px;"><style>.expand-link-icon{fill:#9aa6af} .expand-link:hover .expand-link-icon{fill:#dce0e3}</style><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="expand-link-icon" d="M0,0V32H32V24H28v4H4V4H8V0H0ZM16,0l6,6L12,16l4,4L26,10l6,6V0H16Z" /></svg></div>';
                        var l = k.childNodes[0];
                        k.innerHTML = '<div href="#" class="close-link" style="cursor:pointer;position: absolute; top: 10px; right: 15px; width:16px;height:16px;"><style>.close-link-icon{fill:#9aa6af} .close-link:hover .close-link-icon{fill:#dce0e3}</style><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path class="close-link-icon" d="M5.75,0L0,5.75,2.94,8.68l7.26,7.38L2.94,23.32,0,26.13,5.75,32l2.94-2.94,7.38-7.38,7.26,7.38L26.13,32,32,26.13l-2.94-2.81-7.38-7.26,7.38-7.38L32,5.75,26.13,0,23.32,2.94l-7.26,7.26L8.68,2.94Z"/></svg></div>';
                        var m = k.childNodes[0];
                        f.appendChild(l), f.appendChild(m);
                        var n = b.createElement("div");
                        n.style.cssText = "position: absolute; top:35px; left: 15px;bottom: 35px; right: 15px;", f.appendChild(n), h = b.createElement("iframe"), h.id = e, h.style.cssText = "display:inline-block;width:100%;height:100%;border:none;background-color:black;", n.appendChild(h), b.body.appendChild(f), f.addEventListener("click", function(a) {
                            a.target === f && g.hideFeatureFrame()
                        }), m.addEventListener("click", function(a) {
                            return g.hideFeatureFrame(), !1
                        }), l.addEventListener("click", function(b) {
                            var c = l.dataset.href + "?ref=" + encodeURIComponent(a.location.href) + "&embed_type=overlay&context=lightbox-expand";
                            return a.open(c), !1
                        })
                    }
                    if (c) {
                        var l = b.querySelector(".expand-link");
                        l.dataset.href = c, f.style.display = "block", h.src = c + "?ref=" + encodeURIComponent(a.location.href) + "&embed_type=overlay&context=lightbox", h.focus(), a.AdobeSparkPage.lastBodyOverflowValue = void 0, a.getComputedStyle && (a.AdobeSparkPage.lastBodyOverflowValue = a.getComputedStyle(b.body, null).getPropertyValue("overflow"), b.body.style.overflow = "hidden")
                    }
                },
                hideFeatureFrame: function() {
                    var c = b.getElementById(d),
                        f = b.getElementById(e);
                    c && (c.style.display = "none", void 0 !== a.AdobeSparkPage.lastBodyOverflowValue && (b.body.style.overflow = a.AdobeSparkPage.lastBodyOverflowValue, a.AdobeSparkPage.lastBodyOverflowValue = void 0)), f && (f.src = "about:blank")
                }
            };
        Object.prototype.toString.call(a.HTMLElement).indexOf("Constructor") > 0 && b.body.addEventListener("mousewheel", function() {}, !1), a.addEventListener("message", function(b) {
            var c = b.origin;
            if ("https://spark.adobe.com" === c || "https://slate-ci.adobeprojectm.com" === c || "https://dev.adobeprojectm.com" === c || "https://stage.adobeprojectm.com" === c || "https://qa.adobeprojectm.com" === c) {
                var d = b.data;
                if ("object" == typeof d) switch (d.type) {
                    case "asp-ping":
                        b.source.postMessage("asp-ack", "*");
                        break;
                    case "asp-show":
                        d.href && (f() ? a.open(d.href) : a.AdobeSparkPage.showFeature(d.href))
                }
            }
        }, !1)
    }
}(window, document);