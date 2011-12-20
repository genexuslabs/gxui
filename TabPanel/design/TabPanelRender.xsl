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
      <xsl:when test="@type = 'gxui.TabPanel'">
        <xsl:call-template name="RenderTabPanel"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- TabPanel design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderTabPanel">
    <xsl:variable name="Selected">
      <xsl:value-of select="user:HandleClick()"/>
    </xsl:variable>
    <table cellSpacing="0" cellPadding="0" background="">
      <xsl:attribute name="class">
      	<xsl:value-of select="gxca:GetPropertyValueInt('Cls')"/>
      </xsl:attribute>
      <xsl:call-template name="AddTableStyleAttribute"/>
      <tbody>
        <xsl:apply-templates mode="RenderPanels" select="user:GetPanels()">
          <xsl:with-param name="Selected" select="$Selected" />
        </xsl:apply-templates>
      </tbody>
    </table>
  </xsl:template>

  <xsl:template match="Panels" mode="RenderPanels">
    <xsl:param name="Selected"/>
    <tr>
      <td style="height:1px">
        <xsl:for-each select="Panel">
          <div>
            <xsl:attribute name="id">
              <xsl:value-of select="Id"/>
            </xsl:attribute>
            <xsl:apply-templates mode="AddTDStyleAttribute" select=".">
              <xsl:with-param name="CustomProps">
                <xsl:text>display:inline;height:12px;margin-right:2px;padding:10px 7px 10px 7px;</xsl:text>
              </xsl:with-param>
              <xsl:with-param name="Selected" select="$Selected"/>
            </xsl:apply-templates>
            <div>
              <xsl:attribute name="containerId">
                <xsl:text>Title</xsl:text>
                <xsl:value-of select="Id"/>
              </xsl:attribute>
              <xsl:apply-templates mode="AddTDStyleAttribute" select=".">
                <xsl:with-param name="CustomProps">
                  <xsl:text>display:inline;height:1em;font-family:Tahoma;font-size:0.7em;padding:3px 3px 3px 3px;</xsl:text>
                </xsl:with-param>
                <xsl:with-param name="Selected" select="$Selected"/>
              </xsl:apply-templates>
              <![CDATA[&nbsp;]]>
            </div>
            <img style="margin-left:2px;" alt="Click here to remove tab panel">
              <xsl:attribute name="id">
                <xsl:text>x</xsl:text>
                <xsl:value-of select="Id"/>
              </xsl:attribute>
              <xsl:attribute name="src">
                <xsl:value-of select='gxca:GetMyPath()'/>
                <xsl:text>/TabPanel/design/tab-close-on.gif</xsl:text>
              </xsl:attribute>
            </img>
          </div>
        </xsl:for-each>
        <img id="+" style="padding:6px 6px 6px 6px;" alt="Click here to add a panel">
          <xsl:attribute name="src">
            <xsl:value-of select='gxca:GetMyPath()'/>
            <xsl:text>/TabPanel/design/add.gif</xsl:text>
          </xsl:attribute>
        </img>
      </td>
    </tr>
    <tr>
      <xsl:for-each select="Panel">
        <td>
          <xsl:attribute name="containerId">
            <xsl:value-of select="Id"/>
          </xsl:attribute>
	      <xsl:attribute name="class">
	      	<xsl:value-of select="gxca:GetPropertyValueInt('TabCls')"/>
	      </xsl:attribute>
          <xsl:if test="$Selected != Id">
            <xsl:attribute name="style">
              <xsl:text>display:none;</xsl:text>
            </xsl:attribute>
          </xsl:if>
          <xsl:if test="$Selected = Id">
            <xsl:attribute name="style">
              <xsl:text>background-color:#C9DEFA</xsl:text>
            </xsl:attribute>
          </xsl:if>
        </td>
      </xsl:for-each>
    </tr>
    <tr>
      <td containerId="WebCompGrid" style="height:15px;">
      </td>
    </tr>
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
    <xsl:param name="Selected"/>
    <xsl:variable name="Style">
      <xsl:text>background-image:url(</xsl:text>
      <xsl:value-of select='gxca:GetMyPath()'/>
      <xsl:if test="$Selected = Id">
        <xsl:text>/TabPanel/design/panel-title-light-bg.gif);</xsl:text>
      </xsl:if>
      <xsl:if test="$Selected != Id">
        <xsl:text>/TabPanel/design/tab-unselected.gif);</xsl:text>
      </xsl:if>
      <xsl:value-of select="$CustomProps"/>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
