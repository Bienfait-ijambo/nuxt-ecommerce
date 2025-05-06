


export function showLoginOrSignUpError(error: any) {

  const errors = error?.data?.data?.fieldErrors
  if (typeof error?.data?.message !== 'undefined') {
    showError(error?.data?.message)

  }

  for (const inputFieldName in errors) {
    for (const inputErrorMessage of errors[inputFieldName]) {
      showError(inputErrorMessage)
    }
  }

}

