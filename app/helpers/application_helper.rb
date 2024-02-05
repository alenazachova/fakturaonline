module ApplicationHelper
  def link_to_menu_item(tag, text, url = nil, options = {}, &block)
    wrapper_options = options.delete(:wrapper_options) || {}
    wrapper_options[:class] ||= ['navbar-navigation__item']

    current_path = request.path
    wrapper_options[:class] << ' active' if current_path.include?(url)

    link_content = block_given? ? capture(&block) : ''
    link_content << content_tag(:span, text) if text.present?

    content_tag tag, link_to(link_content.html_safe, url, options), wrapper_options
  end
end
