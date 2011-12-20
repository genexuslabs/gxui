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
      <xsl:when test="@type = 'gxui.Settings'">
        <xsl:call-template name="Render"/>
      </xsl:when>
    </xsl:choose>
  </xsl:template>

  <!-- GxChart design render -->
  <xsl:template name="Render">
    <xsl:variable name="Selected">
      <xsl:value-of select="user:HandleClick()"/>
    </xsl:variable>

    <span atomicselection="true">
      <xsl:call-template name="AddStyleAttribute"/> 
      <table width="16px" height="16px">        
          <TR>
            <TD>
            	<img>
            		<xsl:attribute name="src">
            			<xsl:value-of select='gxca:GetMyPath()'/>
						<xsl:text>\Settings\design\settings.png</xsl:text>
	  				</xsl:attribute>
				</img>       
            </TD>
          </TR>          
      </table>
    </span>
	
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
      <xsl:text>border-style: solid; border-width: 2px; color: gray;</xsl:text>
    </xsl:variable>
    <xsl:attribute name="style">
      <xsl:value-of select="$Style"/>
    </xsl:attribute>
    
  </xsl:template>
  
  
</xsl:stylesheet>