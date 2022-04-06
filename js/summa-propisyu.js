var men_vid = 0,
    sirokna = document.documentElement.clientWidth;
window.onload = psZgr;

function psZgr() {

}




function createCookie(a, c, b) {
    if (b) {
        var d = new Date;
        d.setTime(d.getTime() + 864E5 * b);
        b = "; expires=" + d.toGMTString()
    } else b = "";
    document.cookie = a + "=" + c + b + "; path=/;"
}


function readCookie(a) {
    a += "=";
    for (var c = document.cookie.split(";"), b = 0; b < c.length; b++) {
        for (var d = c[b];
             " " == d.charAt(0);) d = d.substring(1, d.length);
        if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
    }
    return null
}

function eraseCookie(a) {
    createCookie(a, "", -1)
}

function dobNulSprava(a, c) {
    void 0 == c && (c = 2);
    var b = (a + "").split(".");
    void 0 == b[1] && (b[1] = "");
    b[1] += "0000000000";
    b[1] = b[1].substr(0, c);
    return b.join(".")
}

function dlnRazr(a) {
    a = (a + "").split(".");
    for (var c = [], b = 0, d = a[0].length - 1; 0 <= d; --d) 3 == b ? (c[d] = a[0].substr(d, 1) + " ", b = 0) : c[d] = a[0].substr(d, 1), b++;
    a[0] = c.join("");
    return a.join(".")
}

function izmRazdZpt(a) {
    a = (a + " ").split(",").join(".");
    return 1 * a
}

function getOffsetRect(a) {
    a = document.getElementById(a).getBoundingClientRect();
    var c = document.body,
        b = document.documentElement,
        d = a.left + (window.pageXOffset || b.scrollLeft || c.scrollLeft) - (b.clientLeft || c.clientLeft || 0);
    return {
        top: Math.round(a.top + (window.pageYOffset || b.scrollTop || c.scrollTop) - (b.clientTop || c.clientTop || 0)),
        left: Math.round(d)
    }
}





function nchZgr() {
    if (6 < window.location.hash.length) {
        var a = window.location.hash.substr(1).split("-");
        4 == a.length && 50 >= a[0].length && 6 >= a[1].length && 1 == a[2].length && 1 == a[3].length && (document.getElementById("summa-rub").value = a[0], document.getElementById("summ-nds").value = a[1], document.getElementById("menu_nds").innerHTML = menNds(a[2]), document.getElementById("menu_vrpkz").innerHTML = menPok(a[3]))
    }
    rbtSmpr();
    pokSohrDan()
}

function rbtSmpr() {
    var a = document.getElementById("summa-rub").value + "",
        c = document.getElementById("summ-nds").value + "",
        b = 1 * document.getElementById("tip_nds").value,
        d = 1 * document.getElementById("tip_pokaz").value;
    0 == a.length && (a = "0");
    var a = zmnRzdlt(a),
        c = zmnRzdlt(c),
        e = provPole(a, "sum"),
        f = provPole(c, "nds");
    if ("norm" != e || "norm" != f) {
        nds_osn = sum_osn = "net";
        d = [];
        if ("norm" != e) {
            var h = "red",
                g = "Ошибка!";
            d[d.length] = '\n' +
                'Ошибка в поле "Сумма"';
        } else h =
            "#C0C0C0", g = serDelenRazr(a);
        if ("norm" != f) {
            var k = "red",
                l = "Ошибка !";
            d[d.length] = 'Ошибка в поле "Сумма НДС"';
        } else k = "#C0C0C0", f = raschetNds(a, c, b), l = f.nds;
        e = d.join("\n");
        c = "";
    } else {
        f = a.split(".");
        f[1] = dobNulKopeik(f[1]);
        e = delenRazriad(f[0]);
        e = chslPropis(e) + " " + peshatRubleyKop(f[0], ribl_nazv);
        f = f[1] + " " + peshatRubleyKop(f[1], kopk_nazv);
        e = e + " " + f;
        if (0 == d || 3 == d || 6 == d) e = tipPechPropis(e,
            2);
        else if (2 == d || 5 == d || 8 == d) e = tipPechPropis(e, 1);
        f = raschetNds(a, c, b);
        h = f.nds + "";
        g = h.split(".");
        g[1] = dobNulKopeik(g[1]);
        if (3 == d || 4 == d || 5 == d || 6 == d || 7 == d || 8 == d) k = 2 == b ? "\n" +
            "Начислить НДС " + c + "%Сумма НДС - " + serDelenRazr(g[0], "rub") + " руб. " + g[1] + " коп." : 1 == b ? "Выделить НДС " + c + "%Сумма НДС - " +
            serDelenRazr(g[0], "rub") + " руб. " + g[1] + " коп." : "", e += k;
        if (6 == d || 7 == d || 8 == d) k = delenRazriad(g[0]), k = chslPropis(k) + " " + peshatRubleyKop(g[0], ribl_nazv), g = g[1] + " " + peshatRubleyKop(g[1], kopk_nazv), g = k + " " + g, 6 == d ? g = tipPechPropis(g, 2) : 7 == d ? g = tipPechPropis(g, 3) : 8 == d && (g = tipPechPropis(g, 1)), e = e + "\n" + g;
        g = serDelenRazr(a);
        l = serDelenRazr(h);
        k = h = "#C0C0C0";
        c = a + "-" + c + "-" + b + "-" + d;
        createCookie("nst_sum_nds", c, 150);
        c = "#" + c;
        sum_osn = a;
        nds_osn = f.nds
    }
    document.getElementById("itog-sum-prop").value =
        e;
    document.getElementById("okn_posdk").innerHTML = g;
    document.getElementById("sumsernds").innerHTML = l;
    document.getElementById("summa-rub").style.borderColor = h;
    document.getElementById("summ-nds").style.borderColor = k;
    document.getElementById("ssil_stranic").value = window.location.href +"/" + c;
}

function tipPechPropis(a, c) {
    a += "";
    var b = [];
    if (1 == c)
        for (var d = a.length, e = 0; e < d; e++) {
            var f = a.charAt(e),
                h = alf_m.indexOf(f);
            b[b.length] = -1 == h ? f : alf_b.charAt(h);
            f = b.join("")
        } else 2 == c ? (b = a.substr(0, 1), d = a.substr(1), e = alf_m.indexOf(b), -1 != e && (b = alf_b.charAt(e)), f = b + "" + d) : f = a;
    return f
}

function raschetNds(a, c, b) {
    a *= 1;
    c *= 1;
    b *= 1;
    2 == b ? (b = c / 100 * a, c = +b.toFixed(2), a = (1 * a + 1 * b).toFixed(2)) : 1 == b ? (b = a * c / (100 + c), c = +b.toFixed(2), a = (1 * a - b).toFixed(2)) : a = c = 0;
    return {
        nds: c,
        sbsn: a
    }
}

function dobNulKopeik(a) {
    void 0 == a && (a = 0);
    a += "";
    var c = a.length;
    return 0 == c ? "00" : 1 == c ? a + "0" : a
}

function chslPropis(a) {
    for (var c = [], b = a.length, d = b, e = 0; e < b; e++)
        if (!(1 > 1 * a[e])) {
            var f = 1 == e ? "w" : "m";
            c[c.length] = 0 == e ? razriadPropis(a[e], f) : razriadPropis(a[e], f) + "" + nazvRazriad(a[e], msrz[mrna[e]]);
            d--
        } a = [];
    for (e = c.length - 1; 0 <= e; e--) a[a.length] = c[e];
    return 0 == a.length ? "ноль" : a.join(" ")
}

function razriadPropis(a, c) {
    var b = 1 * a,
        d = a + "",
        e = [];
    if (100 <= b) {
        b = 1 * d.substr(0, 1);
        e[e.length] = mnz_3[b];
        var f = 1 * d.substr(1, 2)
    } else 1 <= b && 99 >= b && (f = b);
    1 <= f && 19 >= f ? e[e.length] = "w" == c ? mnz_1_w[f] : mnz_1[f] : 20 <= f && 99 >= f && (b = f + "", d = 1 * b.substr(0, 1), b = 1 * b.substr(1, 1), e[e.length] = mnz_2[d], 0 != b && (e[e.length] = "w" == c ? mnz_1_w[b] : mnz_1[b]));
    return e.join(" ")
}

function delenRazriad(a) {
    var c = a + "",
        b = c.length;
    a = Math.ceil(b / 3);
    b = 3 * a - b;
    c = 2 == b ? "00" + c : 1 == b ? "0" + c : c;
    b = [];
    for (--a; 0 <= a; a--) b[b.length] = c.substr(3 * a, 3);
    return b
}

function serDelenRazr(a, c) {
    isNaN(a) && (a = 0);
    void 0 == c && (c = "norm");
    var b = (a + "").split(".");
    void 0 == b[1] && (b[1] = "00");
    for (var d = b[0].length, e = Math.ceil(d / 3), d = 3 * e - d, d = 2 == d ? "00" + b[0] : 1 == d ? "0" + b[0] : b[0], f = [], h = 0; h < e; h++) f[f.length] = d.substr(3 * h, 3);
    f[0] *= 1;
    return "rub" == c ? f.join(" ") : f.join(" ") + "." + b[1]
}

function provPole(a, c) {
    a += "";
    for (var b = [], d = a.length, e = "sum" == c ? 36 : 2, f = "0123456789.".split(""), h = 0; h < d; h++) 0 > f.indexOf(a.charAt(h)) && (b[b.length] = h + " символы");
    0 == b.length && (d = a.split("."), 2 < d.length && (b[b.length] = "ошибка разрядов"), d[0].length > e && (b[b.length] = "ошибка количества цифр в рублях"),
    void 0 != d[1] && 2 < d[1].length && (b[b.length] = "ошибка количества цифр в копейках"));
    return 0 == b.length ? "norm" : "osib"
}

function zmnRzdlt(a) {
    return a.split(",").join(".")
}

function chslRazrProp(a, c) {
    var b = 1 * a,
        d = a + "",
        e = [];
    if (100 <= b) {
        b = 1 * d.substr(0, 1);
        e[e.length] = mnz_3[b];
        var f = 1 * d.substr(1, 2)
    } else 1 <= b && 99 >= b && (f = b);
    1 <= f && 19 >= f ? e[e.length] = "w" == c ? mnz_1_w[f] : mnz_1[f] : 20 <= f && 99 >= f && (b = f + "", d = 1 * b.substr(0, 1), b = 1 * b.substr(1, 1), e[e.length] = mnz_2[d], e[e.length] = "w" == c ? mnz_1_w[b] : mnz_1[b]);
    return e.join(" ")
}

function nazvRazriad(a, c) {
    var b = 1 * a,
        d = a + "",
        e = 3 == d.length ? 1 * d.substr(2, 1) : 2 == d.length ? 1 * d.substr(1, 1) : b,
        e = 1 <= e && 4 >= e ? " " + c[e] : " " + c[0],
        b = 3 == d.length ? 1 * d.substr(1, 2) : b;
    if (11 == b || 12 == b || 13 == b || 14 == b) e = " " + c[0];
    return e
}

function peshatRubleyKop(a, c) {
    a *= 1;
    var b = a + "",
        d = b.substr(b.length - 1, 1),
        d = 4 >= d ? c[d] : c[0],
        b = 3 == b.length ? 1 * b.substr(1, 2) : a;
    if (11 == b || 12 == b || 13 == b || 14 == b) d = c[0];
    return d
}

function sbrosVse() {
    document.getElementById("summa-rub").value = "0.00";
    document.getElementById("summ-nds").value = "18.00";
    rbtSmpr()
}

function menNds(a) {
    var c = ["Без НДС", "Выделить НДС", "Начислить НДС"],
        b = [];
    a *= 1;
    1 != a && 2 != a && (a = 0);
    for (var d = 0; 3 > d; d++) b[b.length] = '<option value="' + d + '" ' + (d == a ? "selected" : "") + ">" + c[d] + "</option>";
    return '<select id="tip_nds" class="chrn_ar_18" onChange="rbtSmpr();">' + b.join("") + "</select>"
}

function menPok(a) {
    var c = "Первая буква заглавная, НДС не прописывать;Текст прописными буквами, НДС не прописывать;Текст заглавными буквами, НДС не прописывать;Первая буква заглавная, НДС только цифрами;Текст прописными буквами, НДС только цифрами;Текст заглавными буквами, НДС только цифрами;Первая буква заглавная, НДС цифрами и словами;Текст прописными буквами, НДС цифрами и словами;Текст заглавными буквами, НДС цифрами и словами".split(";"),
        b = [];
    a *= 1;
    9 < a && (a = 0);
    for (var d = c.length, e = 0; e < d; e++) b[b.length] = '<option value="' + e + '" ' + (e == a ? "selected" : "") + ">" + c[e] + "</option>";
    return '<select id="tip_pokaz" class="chrn_ar_18_menu_100" onChange="rbtSmpr();">' + b.join("") + "</select>"
}

function shrSohr() {
    var a = document.getElementById("summa-rub").value + "",
        c = document.getElementById("summ-nds").value + "",
        b = 1 * document.getElementById("tip_nds").value,
        d = 1 * document.getElementById("tip_pokaz").value,
        e = document.getElementById("itog-sum-prop").value,
        a = [zglSohr(sum_osn, c, b), e, a, c, b, d],
        c = localStorage.getItem("sum_prop_sohr"),
        c = null != c ? JSON.parse(c) : [];
    100 <= c.length ? alert("\n" + "Возможно сохранение не более 100 значений!") :
        (c[c.length] = a, localStorage.setItem("sum_prop_sohr", JSON.stringify(c)));
    pokSohrDan()
}

function pokSohrDan() {
    var a = localStorage.getItem("sum_prop_sohr");
    if (null == a) a = "Сохраненных результатов нет";
    else if (a = JSON.parse(a), 0 == a.length) a = "Сохраненных результатов нет";
    else {
        for (var c = [], b = a.length - 1; 0 <= b; b--) c[c.length] = '<tr><td width="30" height="20" align="center" class="chrn_ar_14_b">' +
            (b + 1) + '.</td><td height="20" class="chrn_ar_14_b">' + a[b][0] + '</td><td width="40" rowspan="2" align="center"><a href="javascript:udlSohr(' + b + ');"><img src="./images/delete.png" width="19" height="19"></a></td></tr><tr><td width="30" align="center">&nbsp;</td><td height="24"><textarea rows="3" class="chrn_ar_13" style="width:100%;" readonly onclick="select();">' + a[b][1] + "</textarea></td></tr>";
        a = '<table width="100%" border="0" cellspacing="0" cellpadding="0">' + c.join("") + '<tr><td height="40" align="center" class="chrn_ar_14_b">&nbsp;</td><td height="40" align="right" class="chrn_ar_14_b"><a href="javascript:delSohr();">Удалить все</a></td><td width="40" height="40" align="center"><a href="javascript:delSohr();"><img src="./images/delete.png" width="19" height="19"></a></td></tr></table>'
    }
    document.getElementById("sohran_dan").innerHTML =
        a
}

function zglSohr(a, c, b) {
    a = dobNuliSprav(a + "");
    a = a.split(".");
    return a[0] + " руб. " + a[1] + "коп." + (1 == b ? ", выделить НДС " + c + " %" : 2 == b ? ", начислить НДС " + c + " %" : " (без НДС)")
}

function dobNuliSprav(a) {
    a = (a + "").split(".");
    1 == a.length && (a[1] = "00");
    a[1] += "00";
    a[1] = a[1].substr(0, 2);
    return a.join(".")
}

function udlSohr(a) {
    var c = localStorage.getItem("sum_prop_sohr");
    if (null != c) {
        for (var c = JSON.parse(c), b = c.length, d = [], e = 0; e < b; e++) e != a && (d[d.length] = c[e]);
        localStorage.removeItem("sum_prop_sohr");
        localStorage.setItem("sum_prop_sohr", JSON.stringify(d));
        pokSohrDan()
    }
}

function delSohr() {
    localStorage.removeItem("sum_prop_sohr");
    pokSohrDan()
}