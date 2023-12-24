/**
 * Helper service to translate color string into a valid color class.
 */

// List of all valid color strings
const colors = new Array('primary', 'secondary', 'success', 'warning', 'danger', 'info',
                         'light', 'dark', 'muted', 'white', 'blue', 'azure', 'indigo',
                         'purple', 'pink', 'red', 'orange', 'yellow', 'lime', 'green',
                         'teal', 'cyan', 'facebook', 'twitter', 'google', 'youtube',
                         'vimeo', 'dribbble', 'github', 'instagram', 'pinterest', 'vk',
                         'rss', 'flickr', 'bitbucket', 'tabler', 'link')

/**
 * Translate color string into a button color class
 * 
 * @param   color       Color string to be translated
 * @return  String      Button color class matching the color string (or empty if color unknown)
 */
export function getButtonColor(color) {
  return colors.includes(color) ? 'btn-' + color : ''
}

/**
 * Translate color string into a outline button color class
 * 
 * @param   color       Color string to be translated
 * @return  String      Outline button color class matching the color string (or empty if color unknown)
 */
export function getOutlineButtonColor(color) {
  return colors.includes(color) ? 'btn-outline-' + color : ''
}

/**
 * Translate color string into a ghost button color class
 * 
 * @param   color       Color string to be translated
 * @return  String      Ghost button color class matching the color string (or empty if color unknown)
 */
export function getGhostButtonColor(color) {
  return colors.includes(color) ? 'btn-ghost-' + color : ''
}

/**
 * Translate color string into a text color class
 * 
 * @param   color       Color string to be translated
 * @return  String      Text color class matching the color string (or empty if color unknown)
 */
export function getTextColor(color, foreground = false) {
  if(colors.includes(color)) {
    return foreground ? 'text-' + color + '-fg' : 'text-' + color
  } else {
    return ''
  }
}

/**
 * Translate color string into background color class
 * 
 * @param   color       Color string to be translated
 * @param   light       Indicator on whether to use light version
 * @return  String      Background color matching the color string (or empty of color unknown)
 */
export function getBackgroundColor(color, light = false) {
  if(colors.includes(color)) {
    return light ? 'bg-' + color + '-lt' : 'bg-' + color
  } else {
    return ''
  }
}