import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { ServiceRequestDetailPanel } from "./ServiceRequestDetailPanel";
const initialForm = {
    requesterName: "",
    requesterPhone: "",
    requesterEmail: "",
    subject: "",
    details: "",
    source: "website",
    priority: "normal",
    assignedTo: ""
};
export const ServiceRequestsPage = ({ items, selectedItem, onOpenItem, onCreateItem, onConvertToCase }) => {
    const [isCreating, setIsCreating] = useState(false);
    const [form, setForm] = useState(initialForm);
    return (_jsxs("div", { className: "page-grid", children: [_jsxs("article", { className: "panel", children: [_jsxs("div", { className: "section-head", children: [_jsxs("div", { children: [_jsx("h2", { children: "\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u062E\u062F\u0645\u0629" }), _jsx("p", { children: "\u0645\u0631\u062D\u0644\u0629 \u0627\u0644\u0627\u0633\u062A\u0642\u0628\u0627\u0644 \u0642\u0628\u0644 \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0637\u0644\u0628 \u0625\u0644\u0649 \u0639\u0645\u064A\u0644 \u0623\u0648 \u0642\u0636\u064A\u0629." })] }), _jsx("button", { onClick: () => setIsCreating((value) => !value), type: "button", children: isCreating ? "إغلاق النموذج" : "طلب خدمة جديد" })] }), isCreating ? (_jsxs("form", { className: "inline-form", onSubmit: async (event) => {
                            event.preventDefault();
                            await onCreateItem(form);
                            setForm(initialForm);
                            setIsCreating(false);
                        }, children: [_jsx("input", { placeholder: "\u0627\u0633\u0645 \u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628", value: form.requesterName, onChange: (event) => setForm({ ...form, requesterName: event.target.value }) }), _jsx("input", { placeholder: "\u0631\u0642\u0645 \u0627\u0644\u062C\u0648\u0627\u0644", value: form.requesterPhone ?? "", onChange: (event) => setForm({ ...form, requesterPhone: event.target.value }) }), _jsx("input", { placeholder: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A", value: form.requesterEmail ?? "", onChange: (event) => setForm({ ...form, requesterEmail: event.target.value }) }), _jsx("input", { placeholder: "\u0627\u0644\u0645\u0648\u0636\u0648\u0639", value: form.subject, onChange: (event) => setForm({ ...form, subject: event.target.value }) }), _jsx("input", { placeholder: "\u0627\u0644\u0645\u0633\u0624\u0648\u0644", value: form.assignedTo, onChange: (event) => setForm({ ...form, assignedTo: event.target.value }) }), _jsxs("select", { value: form.source, onChange: (event) => setForm({
                                    ...form,
                                    source: event.target.value
                                }), children: [_jsx("option", { value: "website", children: "website" }), _jsx("option", { value: "phone", children: "phone" }), _jsx("option", { value: "walk_in", children: "walk_in" }), _jsx("option", { value: "whatsapp", children: "whatsapp" }), _jsx("option", { value: "referral", children: "referral" }), _jsx("option", { value: "email", children: "email" })] }), _jsxs("select", { value: form.priority, onChange: (event) => setForm({
                                    ...form,
                                    priority: event.target.value
                                }), children: [_jsx("option", { value: "low", children: "low" }), _jsx("option", { value: "normal", children: "normal" }), _jsx("option", { value: "high", children: "high" }), _jsx("option", { value: "urgent", children: "urgent" })] }), _jsx("textarea", { placeholder: "\u062A\u0641\u0627\u0635\u064A\u0644 \u0627\u0644\u0637\u0644\u0628", value: form.details, onChange: (event) => setForm({ ...form, details: event.target.value }) }), _jsx("button", { type: "submit", children: "\u062D\u0641\u0638 \u0627\u0644\u0637\u0644\u0628" })] })) : null, _jsx("div", { className: "table-wrap", children: _jsxs("table", { className: "data-table", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "\u0627\u0644\u0631\u0642\u0645" }), _jsx("th", { children: "\u0645\u0642\u062F\u0645 \u0627\u0644\u0637\u0644\u0628" }), _jsx("th", { children: "\u0627\u0644\u0645\u0648\u0636\u0648\u0639" }), _jsx("th", { children: "\u0627\u0644\u0645\u0635\u062F\u0631" }), _jsx("th", { children: "\u0627\u0644\u0623\u0648\u0644\u0648\u064A\u0629" }), _jsx("th", { children: "\u0627\u0644\u062D\u0627\u0644\u0629" }), _jsx("th", { children: "\u0627\u0644\u0645\u0633\u0624\u0648\u0644" })] }) }), _jsx("tbody", { children: items.map((item) => (_jsxs("tr", { className: "clickable-row", onClick: () => onOpenItem(item.id), children: [_jsx("td", { children: item.requestNo }), _jsx("td", { children: item.requesterName }), _jsx("td", { children: item.subject }), _jsx("td", { children: item.source }), _jsx("td", { children: item.priority }), _jsx("td", { children: item.status }), _jsx("td", { children: item.assignedTo })] }, item.id))) })] }) })] }), selectedItem ? (_jsx(ServiceRequestDetailPanel, { item: selectedItem, onConvertToCase: onConvertToCase })) : null] }));
};
