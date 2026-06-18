import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const navItems = [
    { key: "dashboard", label: "لوحة التحكم" },
    { key: "service-requests", label: "طلبات الخدمة" },
    { key: "cases", label: "القضايا" },
    { key: "tasks", label: "المهام" },
    { key: "appointments", label: "المواعيد" },
    { key: "deadlines", label: "المدد" },
    { key: "notifications", label: "الإشعارات" },
    { key: "clients", label: "العملاء" },
    { key: "hearings", label: "الجلسات" },
    { key: "documents", label: "الوثائق" },
    { key: "finance", label: "المالية" }
];
export const AppShell = ({ activeRoute, title, subtitle, user, onNavigate, onLogout, children }) => {
    return (_jsxs("div", { className: "shell", children: [_jsxs("aside", { className: "sidebar", children: [_jsxs("div", { className: "brand-block", children: [_jsx("p", { className: "eyebrow", children: "Law Office" }), _jsx("h2", { children: "\u0646\u0638\u0627\u0645 \u0627\u0644\u0645\u0643\u062A\u0628" }), _jsx("span", { children: user.branch })] }), _jsx("nav", { className: "sidebar-nav", children: navItems.map((item) => (_jsx("button", { className: item.key === activeRoute ? "nav-item active" : "nav-item", onClick: () => onNavigate(item.key), type: "button", children: item.label }, item.key))) }), _jsxs("div", { className: "sidebar-footer", children: [_jsx("strong", { children: user.fullName }), _jsx("span", { children: user.role }), _jsx("button", { className: "ghost-button", onClick: onLogout, type: "button", children: "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C" })] })] }), _jsxs("div", { className: "main-area", children: [_jsxs("header", { className: "topbar", children: [_jsxs("div", { children: [_jsx("h1", { children: title }), _jsx("p", { children: subtitle })] }), _jsxs("div", { className: "topbar-card", children: [_jsx("span", { children: "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u062D\u0627\u0644\u064A" }), _jsx("strong", { children: user.fullName })] })] }), _jsx("section", { className: "page-content", children: children })] })] }));
};
