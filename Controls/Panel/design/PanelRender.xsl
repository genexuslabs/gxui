<?xml version='1.0'?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:msxml="urn:schemas-microsoft-com:xslt"
	xmlns:gx="urn:shemas-artech-com:gx"
	exclude-result-prefixes="msxml gx"
	xmlns:gxca="urn:GXControlAdap"
  xmlns:user="urn:UserRenderHelper">
  <xsl:output method="html"/>
  <xsl:template match="/" >
    <xsl:apply-templates select="/GxControl"/>
  </xsl:template>
  <xsl:template match="GxControl">
    <xsl:choose>
      <xsl:when test="@type = 'gxui.Panel'">
        <xsl:call-template name="RenderPanel"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- Panel design render -->
  <xsl:template name="RenderPanel">
    <xsl:variable name="Selected">
      <xsl:value-of select="user:HandleClick()"/>
    </xsl:variable>
    <table cellSpacing="0" cellPadding="0" background="">
      <xsl:attribute name="style">
        <xsl:text>width: </xsl:text>
        <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
        <xsl:text>; </xsl:text>
        <xsl:text>height: </xsl:text>
        <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
        <xsl:text>; </xsl:text>
        <xsl:text>border-style: 1px solid;</xsl:text>
      </xsl:attribute>
      <tbody>
        <tr>
          <td>
            <xsl:attribute name="style">
              <xsl:text>background-image:url(</xsl:text>
              <xsl:value-of select='gxca:GetMyPath()'/>
              <xsl:text>\Panel\design\panel-title-light-bg.gif);</xsl:text>
              <xsl:text>padding:1 2 1 2;width:100%;height:1em;font-family:Tahoma;font-size:0.7em</xsl:text>
            </xsl:attribute>
            <xsl:value-of select="gxca:GetStringPropertyValue('Title')"/>
          </td>
        </tr>
        <tr>
          <td>
            <xsl:attribute name="containerId">
              <xsl:text>Body</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="style">
              <xsl:text>padding:1 2 1 2;vertical-align:top;</xsl:text>
            </xsl:attribute>
          </td>
        </tr>
      </tbody>
    </table>
  </xsl:template>
</xsl:stylesheet>
