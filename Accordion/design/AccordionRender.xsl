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
      <xsl:when test="@type = 'gxui.Accordion'">
        <xsl:call-template name="RenderAccordion"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- Accordion design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderAccordion">
    <xsl:variable name="Selected">
      <xsl:value-of select="user:HandleClick()"/>
    </xsl:variable>
    <table cellSpacing="0" cellPadding="0" background="">
      <xsl:call-template name="AddTableStyleAttribute"/>
      <tbody>
        <xsl:apply-templates mode="RenderPanels" select="user:GetPanels()"/>
        <tr atomicSelection="true">
          <td id="+" colspan="4">
            <em style="font-family:Tahoma;font-size:0.7em">
              Click here to add a panel...
            </em>
          </td>
        </tr>
      </tbody>
    </table>
  </xsl:template>

  <xsl:template match="Panels" mode="RenderPanels">
    <xsl:for-each select="Panel">
      <tr>
        <td>
          <xsl:attribute name="containerId">
            <xsl:text>Icon</xsl:text>
            <xsl:value-of select="Id"/>
          </xsl:attribute>
          <xsl:apply-templates mode="AddTDStyleAttribute" select=".">
            <xsl:with-param name="CustomProps">
              <xsl:text>width:11px;</xsl:text>
            </xsl:with-param>
          </xsl:apply-templates>
          <![CDATA[&nbsp;]]>
        </td>
        <td>
          <xsl:attribute name="id">
            <xsl:text>Title</xsl:text>
            <xsl:value-of select="Id"/>
          </xsl:attribute>
          <xsl:attribute name="containerId">
            <xsl:text>Title</xsl:text>
            <xsl:value-of select="Id"/>
          </xsl:attribute>
          <xsl:apply-templates mode="AddTDStyleAttribute" select=".">
            <xsl:with-param name="CustomProps">
              <xsl:text>width:100%;height:1em;font-family:Tahoma;font-size:0.7em</xsl:text>
            </xsl:with-param>
          </xsl:apply-templates>
        </td>
        <td atomicSelection="true">
          <xsl:apply-templates mode="AddTDStyleAttribute" select=".">
            <xsl:with-param name="CustomProps">
              <xsl:text>width:11px;</xsl:text>
            </xsl:with-param>
          </xsl:apply-templates>
          <img>
            <xsl:attribute name="id">
              <xsl:text>x</xsl:text>
              <xsl:value-of select="Id"/>
            </xsl:attribute>
            <xsl:attribute name="src">
              <xsl:value-of select='gxca:GetMyPath()'/>
              <xsl:text>\Accordion\design\tab-close-on.gif</xsl:text>
            </xsl:attribute>
          </img>
        </td>
        <td atomicSelection="true">
          <xsl:apply-templates mode="AddTDStyleAttribute" select=".">
            <xsl:with-param name="CustomProps">
              <xsl:text>width:11px;</xsl:text>
            </xsl:with-param>
          </xsl:apply-templates>
          <img>
            <xsl:attribute name="id">
              <xsl:text>Collapse</xsl:text>
              <xsl:value-of select="Id"/>
            </xsl:attribute>
            <xsl:attribute name="src">
              <xsl:value-of select='gxca:GetMyPath()'/>
              <xsl:choose>
                <xsl:when test="Collapsed = 'false'">
                  <xsl:text>\Accordion\design\expand.gif</xsl:text>
                </xsl:when>
                <xsl:otherwise>
                  <xsl:text>\Accordion\design\ns-expand.gif</xsl:text>
                </xsl:otherwise>
              </xsl:choose>
            </xsl:attribute>
          </img>
        </td>
      </tr>
      <tr>
        <td colspan="4">
          <xsl:attribute name="containerId">
            <xsl:value-of select="Id"/>
          </xsl:attribute>
          <xsl:if test="Collapsed = 'true'">
            <xsl:attribute name="style">
              <xsl:text>display:none;</xsl:text>
            </xsl:attribute>
          </xsl:if>
        </td>
      </tr>
      </xsl:for-each>
  </xsl:template>

  <!-- Helpers Templates -->

  <xsl:template name="AddTableStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>border-style: 1px solid;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>

  <xsl:template match="Panel" mode="AddTDStyleAttribute" >
    <xsl:param name="CustomProps"/>
    <xsl:variable name="Style">
      <xsl:text>background-image:url(</xsl:text>
      <xsl:value-of select='gxca:GetMyPath()'/>
      <xsl:text>\Accordion\design\panel-title-light-bg.gif);</xsl:text>
      <xsl:value-of select="$CustomProps"/>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
