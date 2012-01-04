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
      <xsl:when test="@type = 'gxui.Layout'">
        <xsl:call-template name="RenderLayout"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>
  
  <!-- Layout design render -->
  <!-- ///////////////////  Implement your render here  ///////////////////-->
  <xsl:template name="RenderLayout">
    <xsl:variable name="Selected">
      <xsl:value-of select="user:HandleClick()"/>
    </xsl:variable>
    <!--<span atomicselection="true">-->
    <!--<xsl:call-template name="AddStyleAttribute"/>-->
    <table height="100%" cellspacing="1" cellpadding="1" width="100%" border="0">
      <tbody>
        <xsl:if test="gxca:GetPropertyValueInt('NorthHidden') != 'true'">
          <tr>
            <td valign="middle" colspan="3" containerId="North">
              <xsl:call-template name="AddTDStyleAttribute">
                <xsl:with-param name="RegionId">
                  <xsl:text>North</xsl:text>
                </xsl:with-param>
              </xsl:call-template>
            </td>
          </tr>
        </xsl:if>
        <tr>
          <td valign="top" align="center" containerId="West">
            <xsl:call-template name="AddTDStyleAttribute">
              <xsl:with-param name="RegionId">
                <xsl:text>West</xsl:text>
              </xsl:with-param>
            </xsl:call-template>
          </td>
          <td valign="top" align="center" containerId="Center">
            <xsl:call-template name="AddTDStyleAttribute">
              <xsl:with-param name="RegionId">
                <xsl:text>Center</xsl:text>
              </xsl:with-param>
            </xsl:call-template>
          </td>
          <td valign="top" align="center" containerId="East">
            <xsl:call-template name="AddTDStyleAttribute">
              <xsl:with-param name="RegionId">
                <xsl:text>East</xsl:text>
              </xsl:with-param>
            </xsl:call-template>
          </td>
        </tr>
        <xsl:if test="gxca:GetPropertyValueInt('SouthHidden') != 'true'">
          <tr>
          <td valign="middle" colspan="3" containerId="South">
            <xsl:call-template name="AddTDStyleAttribute">
              <xsl:with-param name="RegionId">
                <xsl:text>South</xsl:text>
              </xsl:with-param>
            </xsl:call-template>
          </td>
        </tr>
        </xsl:if>
      </tbody>
    </table>      
    <!--</span>-->
  </xsl:template>


  <!-- Helpers Templates -->

  <xsl:template name="AddStyleAttribute" >
    <xsl:variable name="Style">
      <xsl:text>width: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Width')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>height: </xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt('Height')"/>
      <xsl:text>; </xsl:text>
      <xsl:text>border-style: solid;	border-width: 2px;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
  
  <xsl:template name="AddTDStyleAttribute" >
    <xsl:param name="RegionId"/>
    <xsl:variable name="Style">
      <xsl:text>border: 2px solid #c3daf9;</xsl:text>
      <xsl:text>margins:</xsl:text>
      <xsl:value-of select="gxca:GetPropertyValueInt($RegionId + 'Margins')"/>
      <xsl:text>;</xsl:text>
      <xsl:choose>
        <xsl:when test="$RegionId = 'North'">
          <xsl:text>height:</xsl:text>
      	  <xsl:value-of select="gxca:GetPropertyValueInt($RegionId + 'Height')"/>
        </xsl:when>
        <xsl:when test="$RegionId = 'South'">
          <xsl:text>height:</xsl:text>
      	  <xsl:value-of select="gxca:GetPropertyValueInt($RegionId + 'Height')"/>
        </xsl:when>
        <xsl:otherwise>
          <xsl:text>width:</xsl:text>
      	  <xsl:value-of select="gxca:GetPropertyValueInt($RegionId + 'Width')"/>
        </xsl:otherwise>
      </xsl:choose>
      <xsl:text>;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
  </xsl:template>
</xsl:stylesheet>
