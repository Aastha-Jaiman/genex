export async function sendContactMail(formData) {
    console.log("formdata",formData)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }
  
      return { success: true, message: data.message };
    } catch (error) {
      return { success: false, message: error.message || "Something went wrong" };
    }
  }



