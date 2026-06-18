import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const DeadlinesPage = ({ items }) => {
    return (_jsx("div", { className: "page-grid", children: _jsxs("article", { className: "panel", children: [_jsxs("div", { className: "section-head", children: [_jsxs("div", { children: [_jsx("h2", { children: "\u0627\u0644\u0645\u062F\u062F \u0627\u0644\u0646\u0638\u0627\u0645\u064A\u0629" }), _jsx("p", { children: "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0645\u062F\u062F \u0627\u0644\u062D\u0631\u062C\u0629\u060C \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646\u0647\u0627\u060C \u0648\u062D\u0627\u0644\u0629 \u0643\u0644 \u0625\u062C\u0631\u0627\u0621." })] }), _jsx("button", { type: "button", children: "\u0625\u0636\u0627\u0641\u0629 \u0645\u062F\u0629" })] }), _jsx("div", { className: "table-wrap", children: _jsxs("table", { className: "data-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "\u0627\u0644\u0642\u0636\u064A\u0629" }), _jsx("th", { children: "\u0627\u0644\u0648\u0635\u0641" }), _jsx("th", { children: "\u0627\u0644\u0645\u0633\u0624\u0648\u0644" }), _jsx("th", { children: "\u0627\u0644\u0627\u0633\u062A\u062D\u0642\u0627\u0642" }), _jsx("th", { children: "\u0627\u0644\u0645\u062A\u0628\u0642\u064A" }), _jsx("th", { children: "\u0627\u0644\u062D\u0627\u0644\u0629" })] }) }), _jsx("tbody", { children: items.map((item) => (_jsxs("tr", { children: [_jsx("td", { children: item.caseRef }), _jsx("td", { children: item.title }), _jsx("td", { children: item.assignedTo }), _jsx("td", { children: formatDate(item.dueDate) }), _jsx("td", { children: renderDaysLeft(item.daysLeft) }), _jsx("td", { children: item.status })] }, item.id))) })] }) })] }) }));
};
const formatDate = (value) => new Intl.DateTimeFormat("ar-SA", {
    dateStyle: "medium"
}).format(new Date(value));
const renderDaysLeft = (daysLeft) => {
    if (daysLeft < 0) {
        return `متأخرة ${Math.abs(daysLeft)} يوم`;
    }
    if (daysLeft === 0) {
        return "اليوم";
    }
    return `${daysLeft} يوم`;
};
