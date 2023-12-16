"use server";

export async function createInquiry(prevState: any, formData: FormData) {
  "use server";

  console.log(formData);

  return {
    message: "Please enter a valid email",
  };

  // mutate data
  // revalidate cache
}
