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
      <xsl:when test="@type = 'gxui.Viewport'">
        <xsl:call-template name="RenderViewport"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- Viewport design render -->
  <xsl:template name="RenderViewport">
    <xsl:variable name="Selected">
      <xsl:value-of select="user:HandleClick()"/>
    </xsl:variable>
    <table cellSpacing="0" cellPadding="0" background="" style="width: 100%;height:100%">
      <tbody>
        <tr>
          <td>
            <xsl:attribute name="containerId">
              <xsl:text>Body</xsl:text>
            </xsl:attribute>
            <xsl:attribute name="style">
              <xsl:text>padding:1 2 1 2;vertical-align:top;border-style:2px black dotted;</xsl:text>
            </xsl:attribute>
          </td>
        </tr>
      </tbody>
    </table>
  </xsl:template>
</xsl:stylesheet>
