import { demoApi } from "./demo-data";
const API_BASE = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";
export const isDemoMode = import.meta.env.VITE_DEMO_MODE === "true" ||
    (import.meta.env.PROD && !import.meta.env.VITE_API_BASE_URL);
let authToken = localStorage.getItem("law_office_token");
export const setApiToken = (token) => {
    authToken = token;
    if (token) {
        localStorage.setItem("law_office_token", token);
    }
    else {
        localStorage.removeItem("law_office_token");
    }
};
async function getJson(path) {
    const response = await fetch(`${API_BASE}${path}`, {
        headers: authToken
            ? {
                Authorization: `Bearer ${authToken}`
            }
            : undefined
    });
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return (await response.json());
}
async function sendJson(path, body) {
    const response = await fetch(`${API_BASE}${path}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            ...(authToken
                ? {
                    Authorization: `Bearer ${authToken}`
                }
                : {})
        },
        body: JSON.stringify(body)
    });
    if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
    }
    return (await response.json());
}
const liveApi = {
    login: (input) => sendJson("/auth/login", input),
    getDashboard: () => getJson("/dashboard"),
    getServiceRequests: async () => {
        const result = await getJson("/service-requests");
        return result.items;
    },
    getCases: async () => {
        const result = await getJson("/cases");
        return result.items;
    },
    getClients: async () => {
        const result = await getJson("/clients");
        return result.items;
    },
    getClientById: (id) => getJson(`/clients/${id}`),
    createClient: (input) => sendJson("/clients", input),
    getCaseById: (id) => getJson(`/cases/${id}`),
    createCase: (input) => sendJson("/cases", input),
    getHearings: async () => {
        const result = await getJson("/hearings");
        return result.items;
    },
    getTasks: async () => {
        const result = await getJson("/tasks");
        return result.items;
    },
    getAppointments: async () => {
        const result = await getJson("/appointments");
        return result.items;
    },
    getDeadlines: async () => {
        const result = await getJson("/deadlines");
        return result.items;
    },
    getNotifications: async () => {
        const result = await getJson("/notifications");
        return result.items;
    },
    getDocuments: async () => {
        const result = await getJson("/documents");
        return result.items;
    },
    getInvoices: async () => {
        const result = await getJson("/finance/invoices");
        return result.items;
    },
    getExpenses: async () => {
        const result = await getJson("/finance/expenses");
        return result.items;
    },
    getServiceRequestById: (id) => getJson(`/service-requests/${id}`),
    createServiceRequest: (input) => sendJson("/service-requests", input),
    convertServiceRequestToCase: (id) => sendJson(`/service-requests/${id}/convert-to-case`, {})
};
export const api = isDemoMode ? demoApi : liveApi;
