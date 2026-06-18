import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { CaseDetailPanel } from "./CaseDetailPanel";
const initialForm = {
    title: "",
    clientName: "",
    caseType: "",
    courtName: "",
    leadLawyer: "",
    description: ""
};
export const CasesPage = ({ items, selectedItem, onOpenItem, onCreateItem }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [form, setForm] = useState(initialForm);
    return (_jsxs("div", { className: "page-grid", children: [_jsxs("article", { className: "panel", children: [_jsxs("div", { className: "section-head", children: [_jsxs("div", { children: [_jsx("h2", { children: "\u0627\u0644\u0642\u0636\u0627\u064A\u0627" }), _jsx("p", { children: "\u0645\u062A\u0627\u0628\u0639\u0629 \u0627\u0644\u0642\u0636\u0627\u064A\u0627 \u0627\u0644\u0645\u0641\u062A\u0648\u062D\u0629 \u0648\u062D\u0627\u0644\u062A\u0647\u0627 \u0648\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644 \u0639\u0646\u0647\u0627." })] }), _jsx("button", { onClick: () => setIsCreating((value) => !value), type: "button", children: isCreating ? "إغلاق النموذج" : "قضية جديدة" })] }), isCreating ? (_jsxs("form", { className: "inline-form", onSubmit: async (event) => {
                            event.preventDefault();
                            await onCreateItem(form);
                            setForm(initialForm);
                            setIsCreating(false);
                        }, children: [_jsx("input", { placeholder: "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0642\u0636\u064A\u0629", value: form.title, onChange: (event) => setForm({ ...form, title: event.target.value }) }), _jsx("input", { placeholder: "\u0627\u0633\u0645 \u0627\u0644\u0639\u0645\u064A\u0644", value: form.clientName, onChange: (event) => setForm({ ...form, clientName: event.target.value }) }), _jsx("input", { placeholder: "\u0646\u0648\u0639 \u0627\u0644\u0642\u0636\u064A\u0629", value: form.caseType, onChange: (event) => setForm({ ...form, caseType: event.target.value }) }), _jsx("input", { placeholder: "\u0627\u0644\u0645\u062D\u0643\u0645\u0629", value: form.courtName, onChange: (event) => setForm({ ...form, courtName: event.target.value }) }), _jsx("input", { placeholder: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A \u0627\u0644\u0645\u0633\u0624\u0648\u0644", value: form.leadLawyer, onChange: (event) => setForm({ ...form, leadLawyer: event.target.value }) }), _jsx("textarea", { placeholder: "\u0648\u0635\u0641 \u0627\u0644\u0642\u0636\u064A\u0629", value: form.description, onChange: (event) => setForm({ ...form, description: event.target.value }) }), _jsx("button", { type: "submit", children: "\u062D\u0641\u0638 \u0627\u0644\u0642\u0636\u064A\u0629" })] })) : null, _jsx("div", { className: "table-wrap", children: _jsxs("table", { className: "data-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "\u0627\u0644\u0645\u0631\u062C\u0639" }), _jsx("th", { children: "\u0627\u0644\u0639\u0646\u0648\u0627\u0646" }), _jsx("th", { children: "\u0627\u0644\u0639\u0645\u064A\u0644" }), _jsx("th", { children: "\u0627\u0644\u0646\u0648\u0639" }), _jsx("th", { children: "\u0627\u0644\u0645\u062D\u0643\u0645\u0629" }), _jsx("th", { children: "\u0627\u0644\u0645\u062D\u0627\u0645\u064A" }), _jsx("th", { children: "\u0627\u0644\u062D\u0627\u0644\u0629" })] }) }), _jsx("tbody", { children: items.map((item) => (_jsxs("tr", { className: "clickable-row", onClick: () => onOpenItem(item.id), children: [_jsx("td", { children: item.caseRef }), _jsx("td", { children: item.title }), _jsx("td", { children: item.clientName }), _jsx("td", { children: item.caseType }), _jsx("td", { children: item.courtName }), _jsx("td", { children: item.leadLawyer }), _jsx("td", { children: item.status })] }, item.id))) })] }) })] }), selectedItem ? _jsx(CaseDetailPanel, { item: selectedItem }) : null] }));
};
