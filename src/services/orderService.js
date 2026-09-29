// Demo service boundary. Connect an API here when a backend is available.
export const submitDemoOrder=async(order)=>({ok:true,reference:`FC-${Date.now().toString().slice(-6)}`,order});
