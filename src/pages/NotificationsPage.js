import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const NotificationsPage = ({ items }) => {
    return (_jsx("div", { className: "page-grid", children: _jsxs("article", { className: "panel", children: [_jsxs("div", { className: "section-head", children: [_jsxs("div", { children: [_jsx("h2", { children: "\u0627\u0644\u0625\u0634\u0639\u0627\u0631\u0627\u062A" }), _jsx("p", { children: "\u062A\u0646\u0628\u064A\u0647\u0627\u062A \u0627\u0644\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u062A\u0639\u0644\u0642\u0629 \u0628\u0627\u0644\u0645\u062F\u062F \u0648\u0627\u0644\u0645\u0648\u0627\u0639\u064A\u062F \u0648\u062A\u063A\u064A\u064A\u0631\u0627\u062A \u0627\u0644\u0642\u0636\u0627\u064A\u0627." })] }), _jsx("button", { type: "button", children: "\u0642\u0648\u0627\u0639\u062F \u0627\u0644\u062A\u0646\u0628\u064A\u0647" })] }), _jsx("ul", { className: "activity-list", children: items.map((item) => (_jsxs("li", { className: item.isRead ? "notification-read" : "notification-unread", children: [_jsx("strong", { children: item.title }), _jsx("span", { children: item.body }), _jsxs("small", { children: [item.channel, " - ", formatDate(item.createdAt)] })] }, item.id))) })] }) }));
};
const formatDate = (value) => new Intl.DateTimeFormat("ar-SA", {
    dateStyle: "medium",
    timeStyle: "short"
}).format(new Date(value));
