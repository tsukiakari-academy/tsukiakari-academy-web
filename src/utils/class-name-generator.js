export const generateClassNames = (rootClassName, classNames) => {
  if (!classNames.length) return rootClassName

  const filteredClassNames = classNames.filter(className => !!className)

  return [rootClassName, ...filteredClassNames].join(" ")
}
