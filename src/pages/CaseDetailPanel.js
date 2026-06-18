import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
const tabs = [
    { key: "overview", label: "نظرة عامة" },
    { key: "hearings", label: "الجلسات" },
    { key: "deadlines", label: "المدد" },
    { key: "filings", label: "الإيداعات" },
    { key: "documents", label: "الوثائق" },
    { key: "tasks", label: "المهام" }
];
export const CaseDetailPanel = ({ item }) => {
    const [activeTab, setActiveTab] = useState("overview");
    return (_jsxs("article", { className: "panel detail-panel", children: [_jsx("div", { className: "section-head", children: _jsxs("div", { children: [_jsx("h2", { children: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0642\u0636\u064A\u0629" }), _jsxs("p", { children: [item.caseRef, " - ", item.title] })] }) }), _jsx("div", { className: "tab-list", children: tabs.map((tab) => (_jsx("button", { className: activeTab === tab.key ? "tab-button active" : "tab-button", onClick: () => setActiveTab(tab.key), type: "button", children: tab.label }, tab.key))) }), activeTab === "overview" ? (_jsxs(_Fragment, { children: [_jsxs("div", { className: "detail-grid", children: [_jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u0645\u0631\u062C\u0639" }), _jsx("strong", { children: item.caseRef })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u062D\u0627\u0644\u0629" }), _jsx("strong", { children: item.status })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u0639\u0645\u064A\u0644" }), _jsx("strong", { children: item.clientName })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u0646\u0648\u0639" }), _jsx("strong", { children: item.caseType })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u0645\u062D\u0643\u0645\u0629" }), _jsx("strong", { children: item.courtName })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u0641\u0631\u0639" }), _jsx("strong", { children: item.branchName })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A" }), _jsx("strong", { children: item.leadLawyer })] }), _jsxs("div", { children: [_jsx("span", { children: "\u0627\u0644\u062C\u0644\u0633\u0629 \u0627\u0644\u0642\u0627\u062F\u0645\u0629" }), _jsx("strong", { children: item.nextHearingDate ? formatDate(item.nextHearingDate) : "-" })] })] }), _jsx("p", { className: "detail-text", children: item.description })] })) : null, activeTab === "hearings" ? (_jsx(SimpleTable, { columns: ["التاريخ", "الغرض", "الموقع", "الحالة"], rows: item.hearings.map((hearing) => [
                    formatDate(hearing.date),
                    hearing.purpose,
                    hearing.location,
                    hearing.status
                ]), emptyText: "\u0644\u0627 \u062A\u0648\u062C\u062F \u062C\u0644\u0633\u0627\u062A \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0647 \u0627\u0644\u0642\u0636\u064A\u0629." })) : null, activeTab === "deadlines" ? (_jsx(SimpleTable, { columns: ["الوصف", "الاستحقاق", "المسؤول", "الحالة"], rows: item.deadlines.map((deadline) => [
                    deadline.title,
                    formatDate(deadline.dueDate),
                    deadline.assignedTo,
                    deadline.status
                ]), emptyText: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u062F\u062F \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0647 \u0627\u0644\u0642\u0636\u064A\u0629." })) : null, activeTab === "filings" ? (_jsx(SimpleTable, { columns: ["العنوان", "النوع", "تاريخ الإيداع", "الحالة"], rows: item.filings.map((filing) => [
                    filing.title,
                    filing.filingType,
                    formatDate(filing.filingDate),
                    filing.status
                ]), emptyText: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0625\u064A\u062F\u0627\u0639\u0627\u062A \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0647 \u0627\u0644\u0642\u0636\u064A\u0629." })) : null, activeTab === "documents" ? (_jsx(SimpleTable, { columns: ["العنوان", "النوع", "الإصدار", "السرية"], rows: item.documents.map((document) => [
                    document.title,
                    document.fileType,
                    `v${document.versionNo}`,
                    document.confidentiality
                ]), emptyText: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0648\u062B\u0627\u0626\u0642 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0647 \u0627\u0644\u0642\u0636\u064A\u0629." })) : null, activeTab === "tasks" ? (_jsx(SimpleTable, { columns: ["المهمة", "المسؤول", "الأولوية", "الحالة"], rows: item.tasks.map((task) => [
                    task.title,
                    task.assignedTo,
                    task.priority,
                    task.status
                ]), emptyText: "\u0644\u0627 \u062A\u0648\u062C\u062F \u0645\u0647\u0627\u0645 \u0645\u0631\u062A\u0628\u0637\u0629 \u0628\u0647\u0630\u0647 \u0627\u0644\u0642\u0636\u064A\u0629." })) : null] }));
};
const SimpleTable = ({ columns, rows, emptyText }) => {
    if (rows.length === 0) {
        return _jsx("p", { className: "empty-state", children: emptyText });
    }
    return (_jsx("div", { className: "table-wrap", children: _jsxs("table", { className: "data-table", children: [_jsx("thead", { children: _jsx("tr", { children: columns.map((column) => (_jsx("th", { children: column }, column))) }) }), _jsx("tbody", { children: rows.map((row, rowIndex) => (_jsx("tr", { children: row.map((cell, cellIndex) => (_jsx("td", { children: cell }, `${rowIndex}-${cellIndex}`))) }, rowIndex))) })] }) }));
};
const formatDate = (value) => new Intl.DateTimeFormat("ar-SA", {
    dateStyle: "medium",
    timeStyle: "short"
}).format(new Date(value));
