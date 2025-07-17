const baseURL =
  process.env.NODE_ENV === "development"
    ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
    : process.env.NEXT_PUBLIC_BASE_URL_PROD;
export async function sendContactForm(formData: FormData) {
  try {
    console.log(`form data: `, formData);
    // const res = await fetch(baseURL + '/submit-contact-form' , {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData)
    // })

    return { success: true, message: "check" };
  } catch (err) {
    console.error(err);
    return { success: false, message: "nope" };
  }
}
