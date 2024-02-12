module ApplicationHelper
  def link_to_menu_item(tag, text, text_mobile, url = nil, options = {}, &block)
    wrapper_options = options.delete(:wrapper_options) || {}
    wrapper_options[:class] ||= ['navbar-navigation__item']

    current_path = request.path
    wrapper_options[:class] << ' active' if current_path.include?(url)

    link_content = block_given? ? capture(&block) : ''
    link_content << content_tag(:span, text, class: text_mobile.present? ? 'text_desktop': '') if text.present?
    link_content << content_tag(:span, text_mobile, class: 'text_mobile') if text_mobile.present?

    content_tag tag, link_to(link_content.html_safe, url, options), wrapper_options
  end
end
